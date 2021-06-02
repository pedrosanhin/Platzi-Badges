import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css";
import astronaut from "../images/astronaut.svg";

function NotFound() {
  return (
    <div className="NotFound">
      <div className="NotFound__text">
        <h1>Error 404</h1>
        <p>Page Not Found</p>
        <Link className="btn btn-primary" to="/">
          Home Page
        </Link>
      </div>
      <div className="NotFound__img">
        <img src={astronaut} alt="Astronaut" />
      </div>
    </div>
  );
}

export default NotFound;
