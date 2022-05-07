import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
  @media screen and (max-width: 600px) {
    opacity: 0.4;
    font-weight: normal;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
  @media screen and (max-width: 600px) {
    font-weight: bold;
    opacity: 0.55;
  }
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
  @media screen and (max-width: 800px) {
    margin: -10px 0;
    padding: 8px 8px 8px 4px;
  }
  @media screen and (max-width: 600px) {
    margin: -18px 0;
    padding: 8px 8px 8px 4px;
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  @media screen and (max-width: 800px) {
    height: 75px;
    margin: 0px 0;
  }
`;
