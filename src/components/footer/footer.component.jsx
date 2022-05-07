import React from 'react';
import {
} from '../../routes/nav-bar/nav-bar.styles';
import {
  NavLinksContainer,
  NavLink,
  Disclaimer,
  FooterContainer,
  Copyright,
  AltFooterContainer,
  AltDisclaimer,
  AltCopyright,
} from './footer.styles';

export default function Footer() {
  return (
    <>
      <AltFooterContainer>
        <AltCopyright>&copy; Copyright 2022, Leandro Teixeira.</AltCopyright>
        <AltDisclaimer>
          This site is for illustrative purposes and doesn&apos;t allow real
          purchases.
        </AltDisclaimer>
      </AltFooterContainer>

      <FooterContainer>
        <Copyright>&copy; Copyright 2022, Leandro Teixeira.</Copyright>
        <Disclaimer>
          This site is for illustrative purposes and doesn&apos;t allow real
          purchases.
        </Disclaimer>
        <NavLinksContainer as="span">
          <NavLink
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/LeandroTeixeira"
          >
            Github
          </NavLink>
          <NavLink
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/leandro-luiz-duarte-teixeira-1a44521a7/"
          >
            Linkedin
          </NavLink>
          <NavLink
            as="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://leandroteixeira.github.io"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="#"
            onClick={() => {
              window.location = 'mailto:leandroteixeira3@gmail.com';
            }}
          >
            E-Mail
          </NavLink>
        </NavLinksContainer>
      </FooterContainer>
    </>
  );
}
