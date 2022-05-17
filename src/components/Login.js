import axios from "axios";
import { useRef, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";

const Login = () => {
  const errRef = useRef();
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  axios.defaults.withCredentials = true;

  const userToSend = { email, password };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios
        .post("https://obscure-bayou-38424.herokuapp.com/login", userToSend, {
          withCredentials: false,
        })
        .then((res) => {
          setCookie("email", email, 1);
          saveSession(res.data);
        });

      setEmail("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      errRef.current.focus();
    }
  };

  return (
    <>
      {getCookie("email") !== "" && success ? (
        <HomeComponent />
      ) : (
        <>
          <div>
            <div className="navbar">
              <div className="icon">
                <Link to={"/landing"}>
                  <h2 className="logo">MyCirculation</h2>
                </Link>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link to={"/home"}>Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="main">
            <section className="login-section">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />

                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={password}
                  required
                />
                <div className="btn">
                  <button>Sign In</button>
                </div>
              </form>
              <p>
                Need an Account?
                <br />
                <span className="line">
                  <Link to="/register">Sign Up</Link>
                </span>
              </p>
            </section>
          </div>
        </>
      )}
    </>
  );
};

function setCookie(cName, cValue, expDays) {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}
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

function saveSession(session) {
  sessionStorage.setItem("mySession", JSON.stringify(session));
}

export default Login;
