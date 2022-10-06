import React from "react";
import { useAppContext } from "../Context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = useAppContext();
  console.log("🚀 ~ file: Card.jsx ~ line 6 ~ Card ~ githubUser", githubUser);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <>
      <article>
        <header>
          <img src={avatar_url} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>@{twitter_username || "john smith"}</p>
          </div>
          <a href={html_url}>follow</a>
        </header>
        <p>
          <MdBusiness />
          {company}
        </p>
        <p>
          <MdLocationOn />
          {location || "earth"}
        </p>
        <a href={`https://{blog}`}>
          <MdLink />
        </a>
      </article>
    </>
  );
};

export default Card;
