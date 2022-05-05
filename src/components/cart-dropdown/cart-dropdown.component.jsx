import React, {
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartDropdownContainer, CartItems, EmptyCart } from './cart-dropdown.styles';
import { GlobalContext } from '../../services/contexts';
import { currencyFormatter } from '../../services/utils';

export default function CartDropdown() {
  const { cartItems, total } = useContext(GlobalContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => { navigate('/checkout'); };
  return (
    <CartDropdownContainer>
      <CartItems>
        {!cartItems.length && <EmptyCart> The Cart is Empty</EmptyCart>}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <h2>
        Total :
        {currencyFormatter(total)}
      </h2>
      <Button buttonType="default" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}
