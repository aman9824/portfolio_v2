import React from "react";
import { FiChevronDown } from "react-icons/fi";

function Main() {
  return (
    <div className="main__container">
      <h2>
        Hello There{" "}
        <span aria-label="hand" style={{ fontSize: "40px" }}>
          👋
        </span>
      </h2>
      <h1 className="title">
        I am Software Developer at Amdocs.
      </h1>
      <h5 style={{ marginTop: "20px", textAlign: "center" }}>
        Thanks for visiting my Portfolio
      </h5>
      <div className="more">
        <p>
          Checkout my work
          <span>
            <FiChevronDown className="image" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Main;
