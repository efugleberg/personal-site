import React from "react";
import styled from "styled-components";
import jasmine from "../../assets/jasmine.png";
import pikachu from "../../assets/pikachu.png";
import flex from "../../assets/flex.png";

const MarginTop = styled.span`
  margin-top: 125px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 14px;
  border: 1px solid red;
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
  font-size: 14px;
  font-weight: bold;
  border: 1px solid blue;
`;

const SpanRight = styled.span`
  cursor: pointer;
  margin-left: 30%;
  font-weight: bold;
  border: 1px solid green;
`;

const Portfolio = () => {
  return (
    <div className="Content">
      <div className="Portfolio">
        <MarginTop>
          <h3>
            I am a full stack software engineer based in St. Paul, MN. Prior to
            becoming an engineer, I provided assurance services as a CPA for 6
            years and worked in financial services for an additional 3 years. As
            a developer in the Lambda School program, I gained expertise and
            built projects in JavaScript, React.JS, Node.JS, and Python.
            Additional technical skills include SQL, Git, and project workflow
            tools such as Notion and Trello.
          </h3>
        </MarginTop>

        <h3>
          Below are a few projects I completed during Lambda School. All of the
          repos I worked on, and a few extra, are in my public repository list
          on{" "}
          <a href="https://github.com/efugleberg" target="_blank">
            <strong>Github</strong>
          </a>
          .
        </h3>

        <ContainerLeft>
          <LeftSpan>
            <p>
              Pokemon Catch N Go is a web application built to allow users to
              determine whether a specific Pokemon is worth catching. I was the
              back-end enginner on the project and I implemented a RESTful API
              built using NodeJS with a PostgreSQL database.
            </p>
          </LeftSpan>
          <SpanRight>
            <a href="https://worthymon.netlify.com/" className="image">
              <img src={pikachu} alt="iphone and ipad image" />
            </a>
          </SpanRight>
        </ContainerLeft>
        <ContainerRight>
          <LeftSpan>
            <p>
              Landing page for the Disney Parent build week project. Designed
              with HTML, CSS and JavaScript. Disney Parent is a web app that
              allows parents to hire a babysitter inside the theme park so they
              can peruse the park sans children.
            </p>
          </LeftSpan>
          <SpanRight>
            <p>
              Hosted site:{" "}
              <a
                href="https://nifty-jennings-47e3cc.netlify.com/"
                className="image"
              >
                <img src={jasmine} alt="runner at the starting block" />
              </a>
            </p>
          </SpanRight>
        </ContainerRight>
        <ContainerLeft>
          <LeftSpan>
            <p>
              Gread Idea Web Page designed with Flexbox. Page was originally
              built using inline-block. I rebuilt the webpage using flexbox.
            </p>
          </LeftSpan>
          <SpanRight>
            <a href="#" className="image"><img src={flex} alt="bicep flex" /></a>
          </SpanRight>
        </ContainerLeft>
      </div>
    </div>
  );
};

export default Portfolio;
