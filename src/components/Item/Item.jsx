import React from 'react';

import StripeCheckoutButton from '../StripeButton/StripeButton';

function item({param}) {
    
    return(
        <div>
            <h1>Make Stripe Payment @ {param.name}</h1>
            <p>
                Pay Total of $ {param.totalPrice}
            </p>
            <p>
            <StripeCheckoutButton param={param} />
            </p>
        </div>
    )
}

export default item;