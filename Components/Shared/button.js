import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const FlatButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "teal",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default FlatButton;
