import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import "./style.css";
const Scatter = ({ Wine, width }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const axisArray = [];
    Wine.map((item) =>
      axisArray.push([Number(item["Color intensity"]), Number(item["Hue"])])
    );
    setData(axisArray);
  }, []);
  const options = {
    grid: { top: 50, right: width.right, bottom: 50, left: width.left },
    xAxis: {
      type: "value",
      name: "Color Intensity",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: "Hue",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        data: data,
        type: "scatter",
        smooth: true,
      },
    ],

    tooltip: {
      trigger: "axis",
    },
  };
  return (
    <div className="container">
      <div className="chartContainer">
        <p className="text">Scatter Chart between Color Intensity and Hues </p>
        <ReactECharts option={options} notMerge={true} lazyUpdate={true} />
      </div>
    </div>
  );
};

export default Scatter;
