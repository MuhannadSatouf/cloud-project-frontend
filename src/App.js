import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Landing />} />
        <Route path="landing" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* we want to protect these routes */}

        <Route path="/home" element={<Home />} />

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
