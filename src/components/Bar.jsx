import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import "./style.css";
const Bar = ({ Wine, width }) => {
  const [data, setData] = useState({
    id: [],
    malicAcid: {
      id: 0,
      malicAcid: 0,
    },
  });

  const handleData = () => {
    const id = new Set();
    Wine.map((item) => id.add(item["Alcohol"]));
    const idArray = Array.from(id);
    console.log(idArray);
    const arr = idArray.map((item) => {
      const temp = Wine.filter((wine) => wine["Alcohol"] === item).map(
        (wine) => wine["Malic Acid"]
      );
      const sum = temp.reduce((a, b) => a + b, 0);
      const avg = sum / temp.length;
      return avg;
    });
    setData((prev) => {
      return {
        ...prev,
        id: idArray,
        malicAcid: arr,
      };
    });
  };
  useEffect(() => {
    handleData();
  }, []);
  const options = {
    grid: { top: 50, right: width.right, bottom: 50, left: width.left },
    xAxis: {
      type: "category",
      data: data.id,
      name: "Alcohol",
      nameLocation: "middle",
      nameGap: 30,
    },
    yAxis: {
      type: "value",
      name: "Malic Acid",
      nameLocation: "middle",
      nameGap: 30,
    },
    series: [
      {
        data: data.malicAcid,
        type: "bar",
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
        <p className="text">
          Bar Chart between Alcohol and Average of Malic Acid on Each Class
        </p>
        <ReactECharts option={options} notMerge={true} lazyUpdate={true} />
      </div>
    </div>
  );
};

export default Bar;
