import React, { useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormContainer, PaymentFormContainer } from './payment-form.styles';
import { defaultCurrency } from '../../services/utils';
import { GlobalContext, UserContext } from '../../services/persistence/contexts';

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const { total } = useContext(GlobalContext);
  const { currentUser } = useContext(UserContext);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const response = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total * 100,
          currency: defaultCurrency,
        }),
      },
    ).then((res) => res.json());

    console.log(response);

    // eslint-disable-next-line camelcase
    const { paymentIntent: { client_secret } } = response;
    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(
      client_secret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : 'guest',
          },
        },
      },
    );
    if (paymentResult.error) console.log(paymentResult.error.message);
    else if (paymentResult.paymentIntent.status === 'succeeded') console.log('Payment Succesfull');
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment: </h2>
        <CardElement />
        &nbsp;
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit"> Pay Now </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
}
