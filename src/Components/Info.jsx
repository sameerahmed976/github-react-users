import React from "react";
import { useAppContext } from "../Context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
const Info = () => {
  const { githubUser } = useAppContext();
  // console.log("🚀 ~ file: Info.jsx ~ line 6 ~ Info ~ githubUser", githubUser);
  const { public_repos, following, followers, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "green",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "blue",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <>
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <>
      <article>
        <span className={color}>{icon}</span>
        <div>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </article>
    </>
  );
};

export default Info;
