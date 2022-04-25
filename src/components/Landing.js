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
                  <h1>Login</h1>
                </li>
                <li>
                  <h1>Contact</h1>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div>
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
  );
};

export default Landing;
