import React from "react";
import email from "../../assets/Email.png";
import github from "../../assets/GitHubLg.png";
import linkedin from "../../assets/LinkedInLg.png";
import styled from "styled-components";

const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

const SpanBottom = styled.span`
  cursor: pointer;
  flex-wrap: ;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
`;

const Contact = () => {
  return (
    <div className="Content">
      <div className="Contact">
        <h1>CONTACT:</h1>
        <h3>
          If there is interest, I plan to assemble distribution list in the
          future. In the meantime, please feel free to email me at{" "}
          <a href="mailto: eric.fugleberg@gmail.com">
            <strong>eric.fugleberg@gmail.com</strong>
          </a>
          . There are also links to my LinkedIn and Github profiles. Email will
          likely summon the quickest response.
        </h3>
        <ContainerBottom>
          <div className="contact-logos">
            <SpanBottom>
              <a href="mailto: eric.fugleberg@gmail.com" target="_blank">
                <img src={email} alt="email" />
              </a>
            </SpanBottom>
            <SpanBottom>
              <a
                href="https://www.linkedin.com/in/eric-fugleberg"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </SpanBottom>
            <SpanBottom>
              <a href="https://github.com/efugleberg" target="_blank">
                <img src={github} alt="github" />
              </a>
            </SpanBottom>
          </div>
        </ContainerBottom>
      </div>
    </div>
  );
};

export default Contact;
