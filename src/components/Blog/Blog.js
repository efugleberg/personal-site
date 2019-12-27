import React from "react";
import styled from "styled-components";

const MarginTop = styled.span`
  margin-top: 125px;
`;

const Blog = () => {
  return (
    <div className="Content">
      <MarginTop>
        <h1>Personal Blog</h1>
      </MarginTop>
      <p>
        I started writing again. Check out my blog at{" "}
        <a href="http://www.minusvii.com" style={{ color: "black" }} target="_blank">
          www.minusvii.com{" "}
        </a>
      </p>
    </div>
  );
};

export default Blog;
