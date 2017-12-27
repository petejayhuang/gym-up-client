import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import moment from "moment";
import { bicepCurlData } from "../../../sampleData";

const labels = bicepCurlData.map(workout => {
  return moment(workout.date);
});

const dataSet = bicepCurlData.map(workout => {
  return workout.weight * workout.reps * workout.sets;
});

const average =
  dataSet.reduce((accumulator, current, index) => {
    return accumulator + current;
  }, 0) / dataSet.length;

const data = {
  labels,
  datasets: [
    {
      label: "Bicep Curls",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
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
  ],
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Chart.js Draw Line On Chart"
    },
    tooltips: {
      mode: "index",
      intersect: true
    },
    annotation: {
      annotations: [
        {
          type: "line",
          mode: "horizontal",
          value: 500,
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 4,
          label: {
            enabled: false,
            content: "Test label"
          }
        }
      ]
    }
  }
};

export default class TotalWeight extends Component {
  render() {
    console.log(labels, dataSet, "average:", average);
    return (
      <div>
        <h2>Line Example</h2>
        <Line data={data} />
      </div>
    );
  }
}
