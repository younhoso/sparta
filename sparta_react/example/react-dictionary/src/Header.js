/**
 * Header.js
 */

import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import Img from "./img/title.svg";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>
          <TitleImg src={Img} alt="중국어 단어장" />
        </Title>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  ${({ theme }) => {
    const { colors, device } = theme;
    return css`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      background-color: ${colors.white};
      border-bottom: 2px solid ${colors.mint};

      ${device.tablet} {
        height: 60px;
      }
    `;
  }}
`;

const Title = styled.h1`
  ${({ theme }) => {
    const { colors, device, fontSizes } = theme;
    return css`
      color: ${colors.mainColor};
      font-size: ${fontSizes.lg};
      font-weight: 600;

      ${device.tablet} {
        font-size: ${fontSizes.xl};
      }
    `;
  }}
`;

const TitleImg = styled.img`
  margin-top: 2px;
  height: 28px;

  ${({ theme }) => theme.device.tablet} {
    height: 30px;
  }
`;

export default Header;
