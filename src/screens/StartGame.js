import { Alert, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGame = ({ pickedUpNumber }) => {
  const [enteredNum, setEnteredNum] = useState("");

  const resetHandler = () => {
    setEnteredNum("");
  };

  const confirmHandler = () => {
    const confirmNum = parseInt(enteredNum);
    if (isNaN(confirmNum) || confirmNum <= 0 || confirmNum > 99) {
      Alert.alert("Invalid Number", "Number has to be a between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    pickedUpNumber(confirmNum);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <View style={styles.inputContainer}>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={2}
            value={enteredNum}
            onChangeText={(text) => setEnteredNum(text)}
          />
        </View>
        <View style={styles.btnCtn}>
          <View style={styles.btn}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.btn}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  input: {
    width: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.yellow,
    padding: 10,
    color: Colors.yellow,
    fontSize: 25,
    fontWeight: "500",
  },
  btnCtn: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});
