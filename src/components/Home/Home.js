import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { Alert } from "reactstrap";
import styled from "styled-components";
import halloween from "../../assets/Halloween.jpeg";
import apples from "../../assets/ApplePicking.jpeg";
import skiing from "../../assets/Skiing.jpeg";

const ContainerWrapper = styled.span`
  margin: 140px 15px 15px;
  font-weight: bold;
  display: flex;
  border-bottom: 1px solid grey;
`;

const ImgContainer = styled.span`
    // display: flex;
    margin: auto;
  padding: 15px;
`;

const Home = () => {
  return (
    <div className="homepage-wrapper">
      <ContainerWrapper>
        <ImgContainer>
          <img src={halloween} alt="halloween"></img>
        </ImgContainer>
        <ImgContainer>
          <img src={apples} alt="apples"></img>
        </ImgContainer>
        <ImgContainer>
          <img src={skiing} alt="skiing"></img>
        </ImgContainer>
      </ContainerWrapper>

      <div className="flex-grid-halves">
        <div className="col">
          <a
            href="https://www.ericfugleberg.com/contact"
            style={{ color: "white" }}
          >
            CONTACT
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.ericfugleberg.com/portfolio"
            style={{ color: "white" }}
          >
            PORTFOLIO
          </a>
        </div>
      </div>

      <div className="flex-grid-thirds">
        <div className="col">
          <a
            href="https://www.ericfugleberg.com/bio"
            style={{ color: "black" }}
          >
            BIO
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.ericfugleberg.com/blog"
            style={{ color: "black" }}
          >
            BLOG
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.ericfugleberg.com/bookshelf"
            style={{ color: "black" }}
          >
            BOOKSHELF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
