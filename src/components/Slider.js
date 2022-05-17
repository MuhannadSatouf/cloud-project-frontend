import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import axios from "axios";
function valuetext(value) {
  return `${value}`;
}

function createResponse(data) {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

function SliderComponent() {
  const [created, setCreated] = useState(false);
  const [data, setData] = useState("");
  const postNewRecord = async () => {
    const session = JSON.parse(sessionStorage.getItem("mySession"));

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
        setData(res.data.verdict);
        setCreated(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [systolic, setSystolic] = useState(0);
  const [diastolic, setDiastolic] = useState(0);
  const [heartRate, setHeartRate] = useState(0);

  const changeSystolic = (event, value) => {
    setSystolic(value);
  };
  const changeDiastolic = (event, value) => {
    setDiastolic(value);
  };
  const changeHeartRate = (event, value) => {
    setHeartRate(value);

    return heartRate;
  };
  return (
    <div className="sliders">
      <div className="slider-container">
        <div className="label-sliders">
          <label className="label">Systolic</label>
        </div>
        <div className="slider">
          <Box>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={10}
              max={250}
              value={systolic}
              onChange={changeSystolic}
            />
          </Box>
        </div>
      </div>
      <div className="slider-container">
        <div className="label-sliders">
          <label className="label">Diastolic</label>
        </div>
        <div className="slider">
          <Box>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={10}
              max={250}
              value={diastolic}
              onChange={changeDiastolic}
            />
          </Box>
        </div>
      </div>
      <div className="slider-container">
        <div className="label-sliders">
          <label className="label">Heart Rate</label>
        </div>
        <div className="slider">
          <Box>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              getAriaValueText={valuetext}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={250}
              value={heartRate}
              onChange={changeHeartRate}
            />
          </Box>
        </div>
        <div className="submit-button">
          <button onClick={postNewRecord}>Submit</button>
        </div>
        <div>
          <>{created === true ? createResponse(data) : <> </>}</>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
