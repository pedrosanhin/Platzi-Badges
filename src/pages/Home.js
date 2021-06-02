import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";
import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";

function Home() {
  return (
    <div className="Home">
      <div className="Home__text">
        <img src={logo} alt="Platzi conf logo" />
        <h1>Print Your Badges</h1>
        <p>The easiest way to manage your conference</p>
        <Link className="btn btn-primary" to="/badges">
          Start Now
        </Link>
      </div>
      <div className="Home__img">
        <img src={astronauts} alt="Astronauts" />
      </div>
    </div>
  );
}

export default Home;
