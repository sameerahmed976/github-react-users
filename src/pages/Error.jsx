import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <section className="error__page">
        <h2 className="error__heading">Error Page</h2>
        <p className="error__message">SomeThing went wrong.</p>
        <Link to="/" className="btn">
          Back to home
        </Link>
      </section>
    </>
  );
};

export default Error;
