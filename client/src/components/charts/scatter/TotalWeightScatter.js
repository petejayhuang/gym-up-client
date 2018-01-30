import React, { Component } from "react";
import moment from "moment";
import { Scatter } from "react-chartjs-2";

import { bicepCurlData } from "../../../sampleData";

const dataSet = bicepCurlData.reduce((array, current, index) => {
  const tempObject = {};
  const momentObject = moment(current.date);
  tempObject["x"] = momentObject;
  tempObject["y"] = current.weight * current.reps * current.sets;
  return array.concat(tempObject);
}, []);

const data = {
  labels: ["Scatter"],
  datasets: [
    {
      label: "Bicep Curls",
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataSet
    }
  ]
};

export default class TotalWeightScatter extends Component {
  render() {
    return (
      <div>
        <h2>Scatter Example</h2>
        <Scatter data={data} />
      </div>
    );
  }
}
