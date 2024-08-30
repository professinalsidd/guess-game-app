import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: Colors.white,
    fontSize: 24,
    padding: 12,
    borderWidth: 2,
    borderColor: Colors.white,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
});
