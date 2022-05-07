import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h2 {
    text-align: center;
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
  }
  @media screen and (max-width: 575px) {
    margin-right: 5px;
    margin-left: 5px;
  }
  @media screen and (max-width: 500px) {
    margin-right: 0px;
    margin-left: 0px;
  }
`;

export const Title = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    font-size: 23px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 650px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  @media screen and (max-width: 950px) {
    column-gap: 15px;
  }
  @media screen and (max-width: 800px) {
    column-gap: 10px;
  }
  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    column-gap: 20px;
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 25px;
    column-gap: 10px;
  }
`;
