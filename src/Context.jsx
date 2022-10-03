import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const mainURL = `https://api.github.com`;
import mockFollowers from "./data/mockFollowers.js";
import mockRepos from "./data/mockRepos.js";
import mockUser from "./data/mockUser.js";
const mainContext = createContext();

const Context = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  return (
    <mainContext.Provider
      value={{
        githubUser,
        githubFollowers,
        githubRepos,
      }}
    >
      {children}
    </mainContext.Provider>
  );
};

const useGithubContext = () => {
  return useContext(mainContext);
};

export { Context, useGithubContext };
