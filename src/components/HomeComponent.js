import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header_home from "./Header_home";
import axios from "axios";
import Landing from "./Landing";
import CreateRecord from "./CreateRecords";
import DynamicTable from "../components/Records";
import CreateStatsDiv from "../components/TotalRecords";

const logout2 = async () => {
  await axios
    .delete("https://obscure-bayou-38424.herokuapp.com/login", {
      withCredentials: false,
    })
    .then(function (response) {
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
  const [records, setRecords] = useState([]);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const session = JSON.parse(sessionStorage.getItem("mySession"));

  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const getRecords = async (setRecords, session) => {
    await axios
      .get("https://obscure-bayou-38424.herokuapp.com/records/" + session._id, {
        withCredentials: false,
      })
      .then((res) => {
        setRecords(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createStatsDiv = (totalRecords, totalUsers) => {
    return (
      <div className="total-div">
        <div className="totalRecords">
          <p>Total Records: {totalRecords}</p>
        </div>
        <div className="totalUser">
          <p>Total Users: {totalUsers}</p>
        </div>
      </div>
    );
  };

  const getStat = async () => {
    const session = JSON.parse(sessionStorage.getItem("mySession"));
    await axios
      .get("https://obscure-bayou-38424.herokuapp.com/stats/" + session._id, {
        withCredentials: false,
      })
      .then((res) => {
        if (res.data.totalRecordsCount > 0) {
          setTotalRecords(res.data.totalRecordsCount);
          setTotalUser(res.data.userRecordsCount);
          createStatsDiv(res.data.totalRecordsCount, res.data.userRecordsCount);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (session === null) {
      <Landing />;
    } else {
      setUserName(session.firstName + " " + session.lastName);
      setTodayDate(date);
      setUserId(session._id);
      setBirthDate(session.Date);
      if (records.length === 0) {
        getRecords(setRecords, session);
        getStat();
      }
    }
  });

  return (
    <div className="app">
      <Header_home />
      <div className="main">
        <div className="home-welcome-div">
          <div className="name-date-div">
            <h1 className="userName">
              Welcome <span> {userName} </span>
            </h1>
            <h1 className="todayDate">
              Today <span> {todayDate} </span>
            </h1>
          </div>
          <div className="wishYou">
            <p>We wish you good health</p>
            <p> check your records and feel free to add new records</p>
          </div>
        </div>
        <DynamicTable {...records} />
        <CreateRecord />
        <Link to={"/landing"}>
          <button onClick={logout2} className="signout-button">
            Sign Out
          </button>
        </Link>
      </div>
      <div>
        <>{createStatsDiv(totalRecords, totalUser)}</>
      </div>
    </div>
  );
}
//"https://obscure-bayou-38424.herokuapp.com/records/"

export default HomeComponent;
