import React from "react";
import logoNotFound from "../assets/img/NotFound.png";

function NotFound() {
  return (
    <div className="notFound">
      <p>Not Found</p>
      <img className="logoNotFound" src={logoNotFound} alt="Not found" />
    </div>
  );
}

export default NotFound;
