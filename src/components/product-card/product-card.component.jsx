import React, { useContext } from 'react';
import { string } from 'prop-types';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { GlobalContext } from '../../services/contexts';
import { currencyFormatter } from '../../services/utils';
import {
  Footer, Name, Price, ProductCardContainer,
} from './product-card.styles';

export default function ProductCard({
  product: {
    id, name, price, imageUrl,
  },
}) {
  const { addCartItem } = useContext(GlobalContext);
  const add = () => {
    addCartItem({
      id, name, price, imageUrl,
    });
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{currencyFormatter(price)}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={add}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
}

ProductCard.propTypes = {
  name: string,
  imageUrl: string,
  price: string,
}.isRequired;
