// App.js
import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart'

function App() {
const history = useHistory();
 const params = [{
    id: 1,
    item: 'Shirt',
    totalPrice : 58,
    name: 'Freaky Jolly Co.',
    image:'https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
 },
 {  
    id:2,
    item: 'Coat',
    totalPrice : 74,
    name: 'Freaky Jolly Co.',
    image:'https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
}]

const [cart, setCart] = useState([])

function addToCart(param){
  const newCart =[...cart]
  newCart.push(param)
  setCart(newCart)
}

function navigateToCart() {
  history.push('/cart')
}

  return (
    <div className="App">
      Total Item in Cart  is {cart.length} 
      
      {/* <button onClick={navigateToCart}>Cart</button> */}
      {params.map((param)=>(
        <Item key={param.id} param={param} addToCart={addToCart}/>
      ))}
  
    </div>
  );
}

export default App;
