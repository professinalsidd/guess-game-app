import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.heading, style]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  heading: {
    color: Colors.yellow,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "open-sans",
  },
});
