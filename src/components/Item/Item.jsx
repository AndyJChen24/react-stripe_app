import React from 'react';
import AddCartButton from '../AddCartButton/AddCartButton'
import StripeCheckoutButton from '../StripeButton/StripeButton';

function item({param, addToCart}) {
    
    return(
        <div>
            <h1>Make Payment for {param.item} @ {param.name}</h1>
            <p>
                Cost ${param.totalPrice}
            </p>
            <p>
            <AddCartButton param={param} addToCart={addToCart}/>
            <StripeCheckoutButton param={param} />
            </p>
        </div>
    )
}

export default item;