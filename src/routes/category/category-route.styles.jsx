import styled from 'styled-components';

export const CategoryRouteContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media screen and (max-width: 950px) {
    column-gap: 15px;
    row-gap: 45px;
  }
  @media screen and (max-width: 800px) {
    column-gap: 10px;
    row-gap: 35px;
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    row-gap: 30px;
  }
  @media screen and (max-width: 650px) {
    row-gap: 35px;
    column-gap: 15px;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    column-gap: 10px;
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    font-size: 23px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 650px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;
