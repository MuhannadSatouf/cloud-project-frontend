import { Outlet } from "react-router-dom";
import Footer from "./footer";
const Layout = () => {
  return (
    <main className="App">
      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
