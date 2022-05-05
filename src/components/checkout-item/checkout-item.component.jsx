import React from 'react';
import {
  number, string, shape, func,
} from 'prop-types';
import {
  Arrow,
  BaseSpan, CheckoutItemContainer, ImageContainer, Quantity, RemoveButton, Value,
} from './checkout-item.styles';
import { currencyFormatter } from '../../services/utils';

export default function CheckoutItem({
  cartItem: {
    name, imageUrl, price, qtd,
  }, remove, increase, decrease,
}) {
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={decrease}>&#10094;</Arrow>
        <Value>{qtd}</Value>
        <Arrow onClick={increase}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{currencyFormatter(qtd * price)}</BaseSpan>
      <RemoveButton onClick={remove}> &#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}

CheckoutItem.propTypes = {
  cartItem: shape({
    name: string,
    quantity: number,
    imageUrl: string,
    price: number,
  }),
  remove: func,
  increase: func,
  decrease: func,
}.isRequired;
