// App.js
import React from 'react';
import './App.css';

import Item from './components/Item/Item';

function App() {
 const param = {
   totalPrice : 58,

 }

  return (
    <div className="App">
      <header className="App-header">
        <Item param={param}/>
      </header>
    </div>
  );
}

export default App;
