import React from "react";

import { Dimensions, View, Text, StyleSheet } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartXLabel,
  ChartYLabel,
  useChartData,
  monotoneCubicInterpolation,
} from "@rainbow-me/animated-charts";
export const { width } = Dimensions.get("window");

const Chart = ({ chartArray }) => {
  const points = monotoneCubicInterpolation({ data: chartArray, range: 30 });

  const output = useChartData();

  const getY = (value) => {
    "worklet";
    if (value === "") {
      return "---";
    }
    return `$ ${Number(value).toFixed(2)}`;
  };

  const getX = (value) => {
    "worklet";
    if (value === "") {
      return "---";
    }
    const date = new Date(Number(value * 1000));
    // const s = date.getSeconds();
    // const m = date.getMinutes();
    // const h = date.getHours();
    // const d = date.getDate();
    // const n = date.getMonth();
    // const y = date.getFullYear();
    // return `${y}/${n}/${d} ${h}:${m}:${s}`;
    const dateFormat = date.toUTCString();
    // console.log(dateFormat);
    return dateFormat;
  };

  return (
    <View style={{ marginHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: points,
          nativePoints: points,
          smoothingStrategy: "bezier",
        }}>
        <ChartPath
          height={width / 2}
          stroke="#242424"
          width={width / 1.05}
          strokeWidth={2}
          selectedStrokeWidth={2}
          hitSlop={20}
        />
        <ChartDot style={styles.shadow} size={12} />

        <View style={styles.textDataStyle}>
          <Text style={{ fontWeight: "bold" }}>Time</Text>
          <Text style={{ fontWeight: "bold" }}>Price</Text>
        </View>

        <View style={styles.textDataStyle}>
          <ChartXLabel
            format={getX}
            style={{ color: "#242424", fontSize: 15 }}
          />
          <ChartYLabel
            format={getY}
            style={{ color: "#242424", fontSize: 15 }}
          />
        </View>
      </ChartPathProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "black",
    shadowColor: "#242424",
    shadowOpacity: 0.5,
    elevation: 5,
  },
  textDataStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default Chart;
