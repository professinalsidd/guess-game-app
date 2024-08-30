import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={style ? style : styles.btnCtn}
      android_ripple={{ color: Colors.PRIMARY700 }}
    >
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnCtn: {
    backgroundColor: Colors.PRIMARY700,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    elevation: 2,
    shadowColor: Colors.PRIMARY500,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 8,
    marginTop: 10,
    width: 130,
    borderRadius: 99,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    textAlign: "center",
    fontFamily: "open-sans-bold",
  },
});
