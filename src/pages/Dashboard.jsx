import React from "react";
import { Navbar, Info, Search, User, Repos } from "../Components";
const Dashboard = () => {
  return (
    <>
      <header className="header">
        <Navbar />
        <Search />
        <Info />
        <User />
        <Repos />
      </header>
    </>
  );
};

export default Dashboard;
