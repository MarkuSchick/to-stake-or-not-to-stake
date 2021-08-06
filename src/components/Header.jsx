import { React } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  const goTo = (href) => {
    history.push(href);
  };

  return (
    <div id="header">
      <h2
        className={`link ${pathname === "/" ? "selected" : ""}`}
        onClick={() => {
          goTo("/");
        }}
      >
        Calculator
      </h2>
      <h2
        className={`link ${pathname === "/motivation" ? "selected" : ""}`}
        onClick={() => {
          goTo("/motivation");
        }}
      >
        Motivation
      </h2>
    </div>
  );
}
