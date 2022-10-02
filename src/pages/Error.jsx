import React from "react";
import styled from "styled-components";
const Error = () => {
  return (
    <>
      <Wrapper>
        <div>
          <h2>Error Page</h2>
          <p>SomeThing went wrong</p>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  h2 {
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default Error;
