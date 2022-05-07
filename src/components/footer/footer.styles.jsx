import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-top: 1px solid black;
  background-color: white;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const AltFooterContainer = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  align-items: center;
  border-top: 1px solid black;
  background-color: white;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 30px;
  }
`;

export const Disclaimer = styled.div`
  font-size: 10px;
  text-align: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const AltDisclaimer = styled.div`
  font-size: 10px;
  text-align: center;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const Copyright = styled.span`
  font-size: 11px;
  text-align: center;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const AltCopyright = styled.span`
  font-size: 11px;
  text-align: center;
  @media screen and (min-width: 550px) {
    display: none;
  }
`;
export const NavLinksContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 550px) {
    font-size: 18px;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 10px;
  cursor: pointer;
  font-weight: bolder;
  @media screen and (max-width: 600px) {
    padding: 5px 5px;
  }
`;
