import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="ops-page-background">
      <div className="ops-page-container">
        <h1>404</h1>
        <h2>Oops! Page not found.</h2>
        <p>We can't find the page you're looking for.</p>
        <Link to={"/landing"}>Go back home</Link>
      </div>
    </div>
  );
};

export default Missing;
