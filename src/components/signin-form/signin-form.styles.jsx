import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
    h2, span {
      margin:auto;
    }
    h2 {
      font-size : 2em;
    }
    span {
      font-size: 1.5em;
    }
    button {
      width: 45%;
      height: 60px;
      padding-top: 5px;
      font-size: 20px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    justify-content: space-around;
  }
`;
