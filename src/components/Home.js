import { useNavigate, Link, Navigate } from "react-router-dom";
import { Fragment, useContext } from "react";

const Home = () => {
  const navigate = useNavigate();

  const logout = async () => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/landing");
  };
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  return (
    <Fragment>
      {getCookie("email") === "" ? (
        <Navigate to="/login" />
      ) : (
        <section>
          <h1>Home</h1>
          <br />
          <p>You are logged in!</p>

          <Link to={"/landing"}>
            <button onClick={logout}>Sign Out</button>{" "}
          </Link>
        </section>
      )}
    </Fragment>
  );
};

export default Home;
