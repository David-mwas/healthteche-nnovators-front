import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

const ChartCard = ({ chart }) => {
  const labels = ["Waiting Time", "Lab Courtesy", "Query Response", "Lab Reliability"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Client Responded",
        backgroundColor: [
          "rgb(255, 99, 132)",
          "#244D70",
          "#D123B3",
          "#F7E018",
          "#fff",
          "#FE452A",
        ],
        borderColor: "rgb(255, 99, 132)",
        data: [chart.waiting_time, chart.lab_courtesy, chart.querry_response,chart.lab_reliability],
      },
    ],
  };
  console.log(chart.name);
  return (
    <div>
     <h1  className="text-center dark:text-white"> {chart.name} </h1>
     <h1 className="text-center dark:text-white">{chart.position}</h1> 
      <Pie className="dark:text-white"  data={data} />
    </div>
  );
};

export default ChartCard;
