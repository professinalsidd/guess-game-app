import { StyleSheet, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 320,
    marginTop: 50,
    marginHorizontal: 14,
    backgroundColor: Colors.PRIMARY500,
    padding: 16,
    elevation: 4,
    shadowColor: Colors.PRIMARY700,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 8,
  },
});
