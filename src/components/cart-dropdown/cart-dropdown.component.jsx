import React, {
  useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { GlobalContext } from '../../services/contexts';
import { currencyFormatter } from '../../services/utils';

export default function CartDropdown() {
  const { cartItems, total } = useContext(GlobalContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => { navigate('/checkout'); };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {!cartItems.length && (
          <span className="empty-cart"> The Cart is Empty</span>
        )}
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <h2>
        Total :
        {currencyFormatter(total)}
      </h2>
      <Button buttonType="default" onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
}
