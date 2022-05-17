import axios from "axios";
import React from "react";
import SliderComponent from "./Slider";
import { useState } from "react";

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
    .then((res) => {})
    .catch(function (error) {
      console.log(error);
    });
};

export default createRecord;
