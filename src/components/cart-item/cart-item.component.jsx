/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { GlobalContext } from '../../services/persistence/contexts';
import {
  CartItemContainer, ItemDetails, Name, Price, Del, AddSub,
} from './cart-item.styles';

export default function CartItem({ item }) {
  const {
    addCartItem, decreaseCartItem, removeCartItem,
  } = useContext(GlobalContext);
  const {
    name, qtd, imageUrl, price,
  } = item;
  const add = () => { addCartItem(item); };
  const sub = () => { decreaseCartItem(item); };
  const del = () => { removeCartItem(item); };
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          <AddSub onClick={sub}>
            -
          </AddSub>
          {qtd}
          <AddSub onClick={add}>
            +
          </AddSub>
          $
          {qtd * price}
        </Price>
      </ItemDetails>
      <Del onClick={del}>
        &#10006;
      </Del>
    </CartItemContainer>
  );
}
