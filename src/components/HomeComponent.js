import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header_home from "./Header_home";
import axios from "axios";
import Landing from "./Landing";

import DynamicTable from "../components/records";

const logout2 = async () => {
  const session = localStorage.getItem("mySession");
  await axios
    .delete("https://obscure-bayou-38424.herokuapp.com/login", {
      withCredentials: false,
    })
    .then(function (response) {
      console.log(response.data);
      document.cookie =
        "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  <Landing />;
};

function HomeComponent() {
  const [userName, setUserName] = useState("Whatever");
  const [birthDate, setBirthDate] = useState("");
  const [userId, setUserId] = useState("");
  const [todayDate, setTodayDate] = useState("");
  const session = JSON.parse(sessionStorage.getItem("mySession"));
  console.log(session);
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDay();

  useEffect(() => {
    setUserName(session.firstName + " " + session.lastName);
    setTodayDate(date);
    setUserId(session._id);
    setBirthDate(session.Date);
  });

  return (
    <div className="app">
      <Header_home />
      <div className="main">
        <h1>Hello: {userName}</h1>
        <h1>Today is:{date}</h1>
        <DynamicTable />
        <Link to={"/landing"}>
          <button onClick={logout2}>Sign Out</button>
        </Link>
        <button onClick={createRecord}>Create post</button>
        <button onClick={getRecords}>get post</button>
      </div>
    </div>
  );
}

const createRecord = async () => {
  const heartRate = 72;
  const systolic = 50;
  const diastolic = 50;

  const object = {
    systolic,
    diastolic,
    heartRate,
  };
  await axios
    .post("http://localhost:5000/records/62652e091cce9bf48d626743", object, {
      withCredentials: false,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
//"https://obscure-bayou-38424.herokuapp.com/records/62652e091cce9bf48d626743"
const getRecords = async () => {
  await axios
    .get("http://localhost:5000/records/62652e091cce9bf48d626743")
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default HomeComponent;
