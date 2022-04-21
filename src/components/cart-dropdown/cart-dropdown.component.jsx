import React, {
  useContext, useEffect, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { GlobalContext } from '../../services/contexts';

const getTotalPrice = (cart) => cart.reduce((acc, current) => acc + current.qtd * current.price, 0);

export default function CartDropdown() {
  const { cartItems } = useContext(GlobalContext);
  const [total, setTotal] = useState(getTotalPrice(cartItems));
  const navigate = useNavigate();

  const goToCheckoutHandler = () => { navigate('/checkout'); };
  useEffect(() => {
    setTotal(getTotalPrice(cartItems));
  }, [cartItems]);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
         !cartItems.length && <span className="empty-cart"> The Cart is Empty</span>
        }
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
      <h2>
        Total :
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'USD',
        }).format(total) }
      </h2>
      <Button buttonType="default" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}
