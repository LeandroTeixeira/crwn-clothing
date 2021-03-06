import React, { useContext } from 'react';
import { GlobalContext } from '../../services/persistence/contexts';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { currencyFormatter } from '../../services/utils';
import {
  CheckoutContainer, CheckoutHeader, HeaderBlock, Total,
} from './checkout.styles';
import PaymentForm from '../../components/payment-form/payment-form.component';

export default function Checkout() {
  const {
    cartItems, total, addCartItem, removeCartItem, decreaseCartItem,
  } = useContext(GlobalContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => {
        const { id } = item;
        return (
          <CheckoutItem
            key={id}
            cartItem={item}
            increase={() => addCartItem(item)}
            decrease={() => decreaseCartItem(item)}
            remove={() => removeCartItem(item)}
          />
        );
      })}
      <Total>
        Total:
        {' '}
        {currencyFormatter(total)}
      </Total>
      <PaymentForm />
    </CheckoutContainer>
  );
}
