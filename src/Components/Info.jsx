import React from "react";
import { useGithubContext } from "../Context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
const Info = () => {
  const { githubUser } = useGithubContext();
  // console.log(githubUser);

  const { public_repos, followers, following, public_gists } = githubUser;

  const data = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "purple",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "white",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "git",
      value: public_gists,
      color: "blue",
    },
  ];

  return (
    <>
      <section className="info__container">
        {data.map((item) => {
          return <p>{item.icon}</p>;
        })}
      </section>
    </>
  );
};

const Item = ({ icon, color, label, value }) => {
  return <article className="item"></article>;
};

export default Info;
