import React from "react";
import styled from "styled-components";
import jasmine from "../../assets/jasmine.png";
import pikachu from "../../assets/pikachu.png";
import flex from "../../assets/flex.png";
import github from "../../assets/GitHubSmall.png";

const MarginTop = styled.span`
  margin-top: 125px;
`;

const ContainerLeft = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 14px;
  margin-bottom: 15px;
  border-top: 1px dotted grey;
`;

const TextSpan = styled.span`
width: 60%
margin-right: 10%;
font-weight: bold;
align-items: center;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  margin: auto;
  font-weight: bold;
  align-items: center;
`;

const Portfolio = () => {
  return (
    <div className="Content">
      <div className="Portfolio">
        <MarginTop>
          <p>
            I am a full stack software engineer based in St. Paul, MN. Prior to
            becoming an engineer, I provided assurance services as a CPA for 6
            years and worked in financial services for an additional 3 years. As
            a developer in the Lambda School program, I gained expertise and
            built projects in JavaScript, React.JS, Node.JS, and Python.
            Additional technical skills include SQL, Git, and project workflow
            tools such as Notion and Trello.
          </p>
        </MarginTop>

        <p>
          Below are a few projects I completed during Lambda School. All of the
          repos I worked on, and a few extra, are in my public repository list
          on{" "}
          <a href="https://github.com/efugleberg" target="_blank">
            <strong>Github</strong>
          </a>
          .
        </p>

        <ContainerLeft>
          <TextSpan>
            <p>
              Pokemon Catch N Go is a web application built to allow users to
              determine whether a specific Pokemon is worth catching. I was the
              back-end enginner on the project and I implemented a RESTful API
              built using NodeJS with a PostgreSQL database.
            </p>
          </TextSpan>
          <LeftSpan>
            <p>Hosted Site:</p>
            <a href="https://worthymon.netlify.com/" className="image">
              <img src={pikachu} alt="pokemon char" />
            </a>
          </LeftSpan>
          <LeftSpan>
            <p>Link to Github Repo:</p>
            <a
              href="https://github.com/bw-pokemon-go-catch/Back-End"
              target="_blank"
            >
              <img src={github} alt="github" />
            </a>
          </LeftSpan>
        </ContainerLeft>
        <ContainerLeft>
          <TextSpan>
            <p>
              Landing page for the Disney Parent build week project. Designed
              with HTML, CSS and JavaScript. Disney Parent is a web app that
              allows parents to hire a babysitter inside the theme park so they
              can peruse the park sans children.
            </p>
          </TextSpan>
          <LeftSpan>
            <p>Hosted site: </p>
            <a
              href="https://nifty-jennings-47e3cc.netlify.com/"
              className="image"
            >
              <img src={jasmine} alt="runner at the starting block" />
            </a>
          </LeftSpan>
          <LeftSpan>
            <p>Link to Github Repo:</p>
            <a
              href="https://github.com/lambda-team-disney-build-week/frontend/tree/eric-fugleberg"
              target="_blank"
            >
              <img src={github} alt="github" />
            </a>
          </LeftSpan>
        </ContainerLeft>
        <ContainerLeft>
          <TextSpan>
            <p>
              Gread Idea Web Page designed with Flexbox. Page was originally
              built using inline-block. I rebuilt the webpage using flexbox.
            </p>
          </TextSpan>
          <LeftSpan>
            <p>Link to Github Repo:</p>
            <a
              href="https://github.com/efugleberg/UI-III-Flexbox"
              target="_blank"
            >
              <img src={github} alt="bicep flex" />
            </a>
          </LeftSpan>
        </ContainerLeft>
      </div>
    </div>
  );
};

export default Portfolio;
