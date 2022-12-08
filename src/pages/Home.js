import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="home-bg-img" />
      <div className="home-nav">
        <Link to="/admin">כניסה לקורס</Link>
      </div>
    </>
  );
};

export default Home;
