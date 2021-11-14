import React, { useState, useEffect } from "react";

import { Dimensions, View, Text } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
// import { getChartData } from "../../api/axios";
export const { width: SIZE } = Dimensions.get("window");
export const data = [
  { x: 1453075200, y: 1.47 },
  // { x: 1453075200, y: 1.47 },

  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];
const points = monotoneCubicInterpolation({ data, range: 40 });

const Chart = () => {
  // const arrayDataObject = [];
  // const [chartData, setChartData] = useState([]);
  // function cnvrtApiData(data) {
  //   data.map((item, index) => {
  //     arrayDataObject[index] = { x: item.x, y: item.y };
  //     console.log(arrayDataObject);
  //     // arrayDataObject["y"] = item[1];
  //   });
  // }
  // useEffect(() => {
  //   getChartData("bitcoin")
  //     .then((chartData) => {
  //       setTimeout(() => {
  //         // setChartData(chartData);
  //         console.log(chartData);
  //         cnvrtApiData(chartData);
  //       }, 5000);
  //     })
  //     .catch((err) => console.log(err));
  // });
  return (
    <ChartPathProvider data={{ points, smoothingStrategy: "bezier" }}>
      <View></View>
      <ChartPath height={SIZE / 2} stroke="#242424" width={SIZE} />
      <ChartDot style={{ backgroundColor: "white" }} />
    </ChartPathProvider>
  );
};

export default Chart;
