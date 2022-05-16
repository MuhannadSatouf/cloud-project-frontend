import axios from "axios";
import React from "react";
import SliderComponent from "./Slider";
import { useState, useEffect } from "react";

function createRecord() {
  return (
    <div>
      <div className="newRecord">
        <div className="newRecord-title">
          <h1>Create new record</h1>
        </div>
        <div className="newRecord-slides">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}

const postNewRecord = async (session) => {
  const [heartRate, setHeartRate] = useState(0);
  setHeartRate();
  console.log("value of heartRate" + heartRate);

  const object = {
    systolic,
    diastolic,
    heartRate,
  };
  await axios
    .post(
      "https://obscure-bayou-38424.herokuapp.com/records/" + session._id,
      object,
      {
        withCredentials: false,
      }
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default createRecord;
