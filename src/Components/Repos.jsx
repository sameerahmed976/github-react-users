import React from "react";
import { useAppContext } from "../Context";
import Example from "./Charts/Example";

const Repos = () => {
  const { repos } = useAppContext();
  // console.log("🚀 ~ file: Repos.jsx ~ line 6 ~ Repos ~ repos", repos);
  return (
    <>
      <section>
        <Example />
      </section>
    </>
  );
};

export default Repos;
