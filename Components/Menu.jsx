import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("AboutScreen")}>
        <View style={styles.wrapper}>
          <MaterialCommunityIcons
            name="information-outline"
            color={"black"}
            size={26}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginStart: 10,
            }}>
            About
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("AboutScreen")}>
        <View style={styles.wrapper}>
          <MaterialCommunityIcons name="star" color={"black"} size={26} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginStart: 10,
            }}>
            Watchlist
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("AboutScreen")}>
        <View style={styles.wrapper}>
          <MaterialCommunityIcons name="update" color={"black"} size={26} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginStart: 10,
            }}>
            Events and Updates
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.3}
        onPress={() => navigation.navigate("AboutScreen")}>
        <View style={styles.wrapper}>
          <MaterialCommunityIcons name="newspaper" color={"black"} size={26} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginStart: 10,
            }}>
            Latest News
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  wrapper: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
});
