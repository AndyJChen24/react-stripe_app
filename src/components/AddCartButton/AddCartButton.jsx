import React from 'react';

const AddCartButton = ({ param, addToCart }) => {
    
    return (
        <button onClick={()=> addToCart(param)}>Add to Cart</button>
    )
}

export default AddCartButton;