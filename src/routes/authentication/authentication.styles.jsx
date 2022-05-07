import styled from 'styled-components';

const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1300px;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap:100px;
  }
`;

export default AuthenticationContainer;
