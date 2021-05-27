import React from 'react'

function Cart(cart){
    return(
        <div>
            {cart.map((cart)=>(
               <p>{cart.item}</p> 
      ))}
        </div>
    )
}
export default Cart;