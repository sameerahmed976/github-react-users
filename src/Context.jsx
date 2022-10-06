<<<<<<< HEAD
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
=======
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
>>>>>>> 71408666a25dbda3eec368b4c7c4c97cf918ec6c
