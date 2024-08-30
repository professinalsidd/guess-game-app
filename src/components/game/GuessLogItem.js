import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const GuessLogItem = ({ rounderNum, guessRound }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.test}>#{rounderNum}</Text>
      <Text style={styles.test}>Opponent's Guess: {guessRound}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    backgroundColor: Colors.yellow,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 4,
    shadowColor: Colors.PRIMARY800,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 50,
    borderRadius: 50,
    padding: 12,
    marginVertical: 8,
  },
  test: {
    color: Colors.black,
    fontFamily: "open-sans",
    fontWeight: "600",
    fontSize: 16,
  },
});
