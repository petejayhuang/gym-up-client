import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import appStyles from "../../../assets/css/appStyles";

const SessionIntensity = props => {
  const x = props.sessions.map(current => {
    return current.start;
  });

  const y = props.sessions.map(current => {
    return current.intensity;
  });

  const data = {
    labels: x,
    datasets: [
      {
        label: "# Intensity",
        backgroundColor: `${appStyles.colors.warningLight}`,
        borderColor: `${appStyles.colors.warning}`,
        borderWidth: 1,
        data: y
      }
    ]
  };
  return (
    <div>
      <h2>Session Intensity</h2>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default SessionIntensity;
