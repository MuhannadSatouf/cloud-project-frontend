import React from "react";
import { Link } from "react-router-dom";
function Header_home() {
  const logout = async () => {
    await axios
      .delete("https://obscure-bayou-38424.herokuapp.com/login", {
        withCredentials: false,
      })
      .then(function (response) {
        document.cookie =
          "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      });
    <Landing />;
    //sessionStorage.removeItem("mySession");
  };
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
              <Link to={"/landing"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header_home;
