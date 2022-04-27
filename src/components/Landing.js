import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { Link } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="header">
          <div className="navbar">
            <div className="icon">
              <h2 className="logo">MyCirculation</h2>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
                <li>
                  <Link to={"/register"}>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome-text">
        <section className="welcome-text-section">
          <div className="welcome-text-div">
            <h1>
              Record your Heartbeat and <span>Blood pressure</span>
            </h1>
            <p className="par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              dolores laboriosam voluptatum alias, similique temporibus vel.
              Veritatis, itaque voluptatem. Error inventore unde similique
              voluptatibus deleniti quod, odio quaerat placeat iusto
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
