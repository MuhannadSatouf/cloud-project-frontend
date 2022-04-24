import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const errRef = useRef();

  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const userToSend = { email, password };

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios
        .post("https://glacial-wave-97952.herokuapp.com/login", userToSend)
        .then((res) => {
          console.log(res.data);
        });

      const accessToken = response?.data?.accessToken;

      setAuth({ email, password, accessToken });
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
                    <a href="">Home</a>
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
                  {/*put router link here*/}
                  <a href="#">Sign Up</a>
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
