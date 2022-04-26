import { useNavigate, Link, Navigate } from "react-router-dom";
import { Fragment, useContext } from "react";

const Home = () => {
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context
    // axios to /logout endpoint

    navigate("/linkpage");
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

          <button onClick={logout}>Sign Out</button>
        </section>
      )}
    </Fragment>
  );
};

export default Home;
