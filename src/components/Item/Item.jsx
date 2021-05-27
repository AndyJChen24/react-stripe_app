import React from 'react';

import StripeCheckoutButton from '../StripeButton/StripeButton';

function item({param}) {
    
    return(
        <div>
            <h1>Make Payment for {param.item} @ {param.name}</h1>
            <p>
                Cost ${param.totalPrice}
            </p>
            <p>
            <StripeCheckoutButton param={param} />
            </p>
        </div>
    )
}

export default item;