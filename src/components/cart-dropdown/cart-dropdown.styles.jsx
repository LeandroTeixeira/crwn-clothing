import styled from 'styled-components';
import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 270px;
  max-width: 60%;
  height: 340px;
  max-height: 35%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  font-size: 0.5em;
  ${BaseButton},
  ${InvertedButton},
  ${GoogleSignInButton} {
    margin-top: auto;
  }
  h2 {
    font-size: 14px;
  }

  @media screen and (max-width: 800px) {
    padding: 12px;
    top: 8%;
    right: 3%;
    h2 {
      text-align: center;
      margin: 5px;
    }
    button {
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 7px;
    right: 5%;
  }
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyCart = styled.span`
  font-size: 25px;
  text-align: center;
  margin: auto;
`;
