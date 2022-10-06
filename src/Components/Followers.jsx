import React from "react";
import { useAppContext } from "../Context";

const Followers = () => {
  const { followers } = useAppContext();
  console.log(
    "🚀 ~ file: Followers.jsx ~ line 6 ~ Followers ~ followers",
    followers
  );
  return (
    <>
      <section className="followers">
        {followers.map((item, index) => {
          return (
            <article key={index}>
              <img src={item.avatar_url} alt="image" />
              <div>
                <h4>{item.login}</h4>
                <a href={item.html_url}>{item.html_url}</a>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Followers;
