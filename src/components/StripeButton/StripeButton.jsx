// stripe.button.component.jsx
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ param }) => {
    const priceForStripe = param.totalPrice * 100;
    const publishableKey = process.env.REACT_APP_PUBLISHABLE_KEY;
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name={param.name}
            billingAddress
            shippingAddress
            image={param.image}
            description={`Your total is $${param.totalPrice}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;