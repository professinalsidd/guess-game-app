import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ roundNum, userNum, onStartGame }) => {
  return (
    <View style={styles.rootCtn}>
      <View style={styles.rootSubCtn}>
        <Title>Game Over</Title>
      </View>
      <View style={styles.imgCtn}>
        <Image
          style={styles.img}
          source={require("../../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.heightLight}>{roundNum}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.heightLight}>{userNum}</Text> .
      </Text>
      <View>
        <PrimaryButton onPress={onStartGame} style={styles.btn}>
          Start New Game
        </PrimaryButton>
      </View>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootCtn: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  rootSubCtn: {
    marginVertical: 20,
  },
  imgCtn: {
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: Colors.PRIMARY800,
    borderRadius: 150,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  summaryText: {
    fontFamily: "open-sans",
    color: Colors.black,
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  heightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.PRIMARY800,
    fontSize: 24,
  },
  btn: {
    backgroundColor: Colors.PRIMARY700,
    width: 180,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 8,
    paddingBottom: 8,
    elevation: 2,
    shadowColor: Colors.PRIMARY500,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    borderRadius: 8,
    borderRadius: 99,
  },
});
