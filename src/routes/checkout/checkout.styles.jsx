import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 60%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 1400px) {
    width: 70%;
  }
  @media screen and (max-width: 1300px) {
    width: 75%;
  }
  @media screen and (max-width: 1200px) {
    width: 85%;
  }
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
  @media screen and (max-width: 1050px) {
    width: 95%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    justify-content: space-evenly
    font-size:  5px;
    width: 100%;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: unset;
    &:last-child {
      width: unset;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media screen and (max-width: 1000px) {
    font-size: 32px;
    margin-top: 25px;
  }
  @media screen and (max-width: 800px) {
    font-size: 28px;
    margin-top: 20px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
    margin-top: 15px;
  }
`;
