import axios from "axios";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!@#$%]).{8,24}$/;

const Register = () => {
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValidPwd(PASSWORD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack

    const v2 = PASSWORD_REGEX.test(password);
    if (!v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    const userToSend = { email, firstName, lastName, birthDate, password };
    try {
      const response = await axios
        .post(
          "https://obscure-bayou-38424.herokuapp.com/register",
          userToSend,
          {
            withCredentials: false,
          }
        )
        .then((res) => {});

      setSuccess(true);
      setEmail("");
      setPwd("");
      setFirstName("");
      setLastName("");
      setBirthDate("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        renderSection()
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
                    <a href="">Home</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="main">
            <section className="register-section">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <div className="register-h1">
                <h1>Register</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First name:</label>
                <input
                  type="text"
                  id="firstName"
                  autoComplete="off"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />

                <label htmlFor="lastName">Last name:</label>
                <input
                  type="text"
                  id="lastName"
                  autoComplete="off"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />

                <label htmlFor="birthDate">Birth Date:</label>
                <input
                  type="date"
                  id="birthDate"
                  autoComplete="off"
                  onChange={(e) => setBirthDate(e.target.value)}
                  required
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label htmlFor="password">
                  Password:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validPwd || !password ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters,
                  <br /> a number and a special character.
                  <br />
                  Allowed special characters:{" "}
                  <span aria-label="exclamation mark">!</span>{" "}
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>{" "}
                  <span aria-label="dollar sign">$</span>{" "}
                  <span aria-label="percent">%</span>
                  <span aria-label="score"> -</span>
                </p>

                <label htmlFor="confirm_pwd">
                  Confirm Password:
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={validMatch && matchPwd ? "valid" : "hide"}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  />
                </label>
                <input
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <FontAwesomeIcon icon={faInfoCircle} />
                  Must match the first password input field.
                </p>

                <button disabled={!validPwd || !validMatch ? true : false}>
                  Sign Up
                </button>
              </form>
              <p>
                Do you have an account?
                <br />
                <span className="line">
                  <Link to={"/login"}>Sign In</Link>
                </span>
              </p>
            </section>
          </div>
        </>
      )}
    </>
  );
};

const renderSection = () => {
  return (
    <div className="success">
      <section className="success-section">
        <div className="success-div">
          <div className="success-text">
            <h1>Your registration is Succeed!</h1>
          </div>
          <div className="success-button">
            <p>
              <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
