import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    @media screen and (max-width: 800px) {
      margin-bottom: 0px;
    }
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    @media screen and (max-width: 800px) {
      top: 150px;
    }
    @media screen and (max-width: 650px) {
      top: 100px;
    }
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 1000px) {
    height: 300px;
  }
  @media screen and (max-width: 900px) {
    height: 275px;
  }
  @media screen and (max-width: 800px) {
    height: 250px;
    button {
      display: flex;
    }
    &:hover {
      img {
        opacity: unset;
      }
  }
  
  @media screen and (max-width: 650px) {
    height: 175px;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    font-size: 15px;
  }
  @media screen and (max-width: 750px) {
    font-size: 14px;
  }
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
  @media screen and (max-width: 650px) {
    font-size: 17px;
  }
  @media screen and (max-width: 550px) {
    font-size: 15px;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    font-size: 13px;
  }
`;

export const Name = styled.span`
  margin-bottom: 15px;
`;

export const Price = styled.span`
  margin-right: 5px;
`;
