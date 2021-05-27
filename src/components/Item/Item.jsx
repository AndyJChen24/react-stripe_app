import React from 'react';

import StripeCheckoutButton from '../StripeButton/StripeButton';

function item({param}) {
    const totalPrice = param.totalPrice ;
    return(
        <div>
            <h1>Make Stripe Payment @ Freaky Jolly</h1>
            <p>
                Pay Total of $ {totalPrice}
            </p>
            <p>
            <StripeCheckoutButton price={totalPrice} />
            </p>
        </div>
    )
}

export default item;