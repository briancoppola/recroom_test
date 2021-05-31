import React from "react";
import "./index.css";

function Movie(props) {
  return (
    <li className="slide-up-fade-in py-10">{props.title}</li>
  );
}

export default Movie;