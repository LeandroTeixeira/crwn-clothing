import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: auto;
    h2,
    span {
      margin: auto;
    }
    h2 {
      font-size: 2em;
    }
    span {
      font-size: 1.5em;
    }
    button {
      width: 100%;
      height: 60px;
      padding-top: 5px;
      font-size: 20px;
    }
  }
`;

export const Message = styled.div`
  margin-top: -10px;
  margin-bottom: 30px;
  font-weight: 550;
  text-align: center;
  font-size: 0.9em;
  @media screen and (max-width: 800px) {
    font-size: 1.2em;
    font-weight: 650;
   
  }
`;

export const SignInButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Error = styled(Message)`
  color: red;
`;

export const Success = styled(Message)`
color:green;
`;
