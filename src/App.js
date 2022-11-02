import React, { useState, useEffect } from "react";
import Wine from "./Wine-Data.json";
import Bar from "./components/Bar";
import Scatter from "./components/Scatter";
import ReactECharts from "echarts-for-react";
import Navbar from "./components/Navbar";
function App() {
  const homeStyle = {
    height: "100vh",
    width: "100vw",
    overflowX: "hidden",
  };
  const [width, setWidth] = useState({
    left: 150,
    right: 150,
  });
  const updateDimensions = () => {
    const newWidth = window.innerWidth;
    if (newWidth < 576) {
      setWidth({
        left: 50,
        right: 50,
      });
    }
    if (newWidth > 576 && newWidth < 768) {
      setWidth({
        left: 100,
        right: 100,
      });
    }
    if (newWidth > 768 && newWidth < 992) {
      setWidth({
        left: 150,
        right: 150,
      });
    }
    if (newWidth > 992 && newWidth < 1200) {
      setWidth({
        left: 200,
        right: 200,
      });
    }
    if (newWidth > 1200) {
      setWidth({
        left: 250,
        right: 250,
      });
    }
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="App">
      <div style={homeStyle}>
        <Navbar />
        <Scatter Wine={Wine} width={width} />
        <Bar Wine={Wine} width={width} />
      </div>
    </div>
  );
}

export default App;
