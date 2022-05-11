import React from "react";
import { Link } from "react-router-dom";
function Header_home() {
  return (
    <div className="page">
      <div className="navbar">
        <div className="icon">
          <Link to={"/landing"}>
            <h2 className="logo">MyCirculation</h2>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to={"/landing"}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header_home;
