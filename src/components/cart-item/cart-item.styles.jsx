import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  
  img {
    width:28%;
  }
`;

export const AddSub = styled.button`
  font-size: 12px;
  cursor: pointer;
  background-color: white;
  border: none;
  margin: 0 3px;
  padding: 1px 5px;
  &:hover {
    padding: 0px 4px;
    border: 1px solid black;
  }
`;

export const Del = styled.button`
  margin-top: 0px;
  height: 20px;
  cursor: pointer;
  background-color: white;
  border: none;
  width: 9%;
`;
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const Name = styled.span`
  font-size: 16px;
`;

export const Price = styled.span`
  font-size: 14px;
`;

// .cart-item-container {

//   img {
//   }
//   .add, .sub {

//   }

// .del {

// }
//   .item-details {

//     .name {
//     }
//     .price {
//       font-size: 14px;
//     }
//   }
// }
