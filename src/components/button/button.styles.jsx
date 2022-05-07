// @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wdth,wght@75,300&display=swap');
import styled from 'styled-components';

export const BaseButton = styled.button`
  min-width: 200px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans", sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    min-width: 150px;
    padding: 0 25px 0 25px;
  }
  @media screen and (max-width: 800px) {
    min-width: 150px;
    padding: 0 25px 0 25px;
    font-size: 13px;
  }
  @media screen and (max-width: 650px) {
    min-width: 100px;
    padding: 0 5px 0 5px;
    font-size: 12px;
  }
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;
export const DisabledBaseButton = styled(BaseButton)`
  opacity: 0.25;
  cursor: default;
  &:hover {
    background-color: black;
    color: white;
    border: none;
    cursor: default;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;
  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`;
export const InvertedButton = styled(BaseButton)`
 background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
