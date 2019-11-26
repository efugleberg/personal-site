import React from "react";
import { Container, Col, Row } from "reactstrap";
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
  //   display: flex;
  padding: 15px;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 30px;
`;

const LinkBox = styled.div`
  width: 33%;
  display: flex;
`;

const Home = () => {
  return (
    // <div className="Content">
    // </div>
    <div>
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
      <Container>
        <Row>
          <Col sm>1 of 3</Col>
          <Col sm>2 of 3</Col>
          <Col sm>3 of 3</Col>
        </Row>
        <Row>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
