import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopBarWrapper = styled.div`
max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 75px;
  background-color: #333;
`;

const TopBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 22px;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: ;
  font-size: 11px;
  font-weight: bold;
`;

const SpanRight = styled.span`
  cursor: pointer;
  margin-left: 30%;
  font-weight: bold;
`;

const TopBar = () => {
  return (
    <TopBarWrapper>
      <TopBarContainer>
        <ContainerLeft>
          <LeftSpan>
            
            <Link to="/" className="link">
              Eric Fugleberg
            </Link>
          </LeftSpan>
        </ContainerLeft>

        <ContainerRight>
          <SpanRight>
            <Link to="/" className="link">
              Home
            </Link>
          </SpanRight>
          <SpanRight>
            <Link to="/bio" className="link">
              Bio
            </Link>
          </SpanRight>
          <SpanRight>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </SpanRight>
          <SpanRight>
            <Link to="/portfolio" className="link">
              Portfolio
            </Link>
          </SpanRight>
          <SpanRight>
            <Link to="/blog" className="link">
              Blog
            </Link>
          </SpanRight>
          <SpanRight>
            <Link to="/bookshelf" className="link">
              Bookshelf
            </Link>
          </SpanRight>
        </ContainerRight>
      </TopBarContainer>
    </TopBarWrapper>
  );
};

export default TopBar;
