import React from "react";
import { View, Text, StyleSheet } from "react-native";
const MainScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla beatae
        dignissimos quibusdam quidem quae dolor cumque sed cupiditate ad
        repellendus nostrum non, amet necessitatibus eum consequuntur voluptate
        ab accusamus officiis!
      </Text>
      <Text>{route.params.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default MainScreen;
