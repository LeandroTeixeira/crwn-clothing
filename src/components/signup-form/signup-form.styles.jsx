import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display:flex;
  flex-direction: column;
  width:550px;
  h2 {
    margin: 10px 0;
  }
  
`;

export const Message = styled.div`
    margin-top: -10px;
    margin-bottom: 30px;
    font-weight: 550;
    text-align: center;
    font-size: 0.9em;
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
