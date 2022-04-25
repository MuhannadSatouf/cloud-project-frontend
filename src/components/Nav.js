import { Link } from "react-router-dom";

const Nav = () => {
  return (
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
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
