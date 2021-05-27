// App.js
import React from 'react';
import './App.css';

import Item from './components/Item/Item';

function App() {
 const params = [{
    totalPrice : 58,
    name: 'Freaky Jolly Co.',
    image:'https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
 },
 {
  totalPrice : 74,
  name: 'Coat Co.',
  image:'https://www.freakyjolly.com/wp-content/uploads/2020/04/fj-logo.png'
}]

  return (
    <div className="App">
      
        {params.map((param)=>(
          <Item param={param}/>
        ))}
        {/* <Item param={param[0]}/> */}
  
    </div>
  );
}

export default App;
