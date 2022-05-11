import React from "react";
import { Link } from "react-router-dom";
import Header_home from "./Header_home";
import axios from "axios";
import Landing from "./Landing";

const logout2 = async () => {
  const session = localStorage.getItem("mySession");
  await axios
    .delete("https://obscure-bayou-38424.herokuapp.com/login", {
      withCredentials: false,
    })
    .then(function (response) {
      console.log(response.data);
      document.cookie =
        "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  <Landing />;
};

function getSessionValues() {
  const session = JSON.parse(sessionStorage.getItem("mySession"));
  console.log(session);
  console.log("user id: " + session._id);
}
function HomeComponent() {
  return (
    <div className="app">
      <Header_home />
      <section>
        <h1>Home</h1>
        <br />
        <p>You are logged in!</p>

        <Link to={"/landing"}>
          <button onClick={logout2}>Sign Out</button>{" "}
        </Link>
        <button onClick={getSessionValues}>Get session id</button>
      </section>
    </div>
  );
}

export default HomeComponent;
