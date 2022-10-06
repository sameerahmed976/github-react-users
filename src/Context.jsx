import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import mockUser from "./mockData/mockUser.js";
import mockRepos from "./mockData/mockRepos.js";
import mockFollowers from "./mockData/mockFollowers.js";
import { useState } from "react";
const appContext = createContext();

const Context = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  return (
    <appContext.Provider
      value={{
        githubUser,
        repos,
        followers,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(appContext);
};

export { useAppContext, Context };
