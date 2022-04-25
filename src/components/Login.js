import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

const LOGIN_URL = "/login";

const Login = () => {
  const errRef = useRef();

  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");

  //const [loginStatus, setLoginStatus] = useState("");
  axios.defaults.withCredentials = true;

  const userToSend = { email, password };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //https://obscure-bayou-38424.herokuapp.com liliia
    try {
      const response = await axios
        .post("https://obscure-bayou-38424.herokuapp.com/login", userToSend, {
          withCredentials: false,
        })
        .then((res) => {
          console.log(res.data);
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
      //setLoginStatus(response.data[0].username);
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <>
          <div className="header">
            <div className="navbar">
              <div className="icon">
                <h2 className="logo">MyCirculation</h2>
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <Link to={"/home"}>Home</Link>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main">
            <section>
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

export default Login;
