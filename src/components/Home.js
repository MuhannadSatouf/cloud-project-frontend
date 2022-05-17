import HomeComponent from "./HomeComponent";
import Login from "./Login";
import { Navigate } from "react-router-dom";

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
function Home() {
  if (getCookie("email") !== "") {
    <Navigate
      to={{
        pathname: "/home",
      }}
    />;

    return <HomeComponent />;
  }
  if (getCookie("email") === "") {
    return <Login />;
  }
}

export default Home;
