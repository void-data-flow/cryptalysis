import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewBlock}>
        <Text style={styles.heading}>About Application</Text>
        <Text style={styles.para}>
          Cryptalysis is a crypto currency price tracking application which also
          helps the user to get updated from the world of crypto market. User
          can see the data of the change in prices through the graph which is
          designed for individual crypto currency.
        </Text>
        <Text style={styles.para}>
          The aim of this project is to help the enthusiastic learners join the
          world of cryptocurrencies.
        </Text>
      </View>

      <View style={styles.viewBlock}>
        <Text style={styles.heading}>Developers</Text>
        <View style={styles.memberRow}>
          <Text style={styles.memberRowText}>Sanchit Bajaj</Text>
          <Text
            style={[styles.memberRowText, { color: "#246EE9" }]}
            onPress={() =>
              Linking.openURL("https://github.com/sanchitbajaj02/")
            }>
            <MaterialCommunityIcons name="github" size={18} color="#246EE9" />
            GitHub
          </Text>
        </View>
        <View style={styles.memberRow}>
          <Text style={styles.memberRowText}>Harsh Mittal</Text>
          <Text
            style={[styles.memberRowText, { color: "#246EE9" }]}
            onPress={() =>
              Linking.openURL("https://github.com/harshmittal1750/")
            }>
            <MaterialCommunityIcons name="github" size={18} color="#246EE9" />
            GitHub
          </Text>
        </View>
      </View>

      <View style={styles.viewBlock}>
        <Text style={styles.heading}>Version</Text>
        <Text style={styles.para}>v1.5.0</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  viewBlock: {
    marginVertical: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  para: {
    fontSize: 16,
    padding: 2,
  },
  memberRow: {
    flexDirection: "row",
    marginVertical: 5,
  },
  memberRowText: {
    marginEnd: 20,
    fontSize: 16,
  },
});

export default About;
