import { Alert, FlatList, StyleSheet, View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, gameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [showGuessNumber, setShowGuessNumber] = useState([initialGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOver(showGuessNumber.length);
    }
  }, [currentGuess, userNumber, gameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setShowGuessNumber((prev) => [newRndNumber, ...prev]);
  }

  const numberLen = showGuessNumber.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.btnCtn}>
          <View style={styles.btnSCtn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons size={24} name="md-remove" />
            </PrimaryButton>
          </View>
          <View style={styles.btnSCtn}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons size={24} name="md-add" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listItem}>
        <FlatList
          data={showGuessNumber}
          renderItem={({ item, index }) => (
            <GuessLogItem guessRound={item} rounderNum={numberLen - index} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  btnCtn: {
    flexDirection: "row",
  },
  btnSCtn: {
    flex: 1,
  },
  listItem: {
    flex: 1,
    padding: 12,
  },
});
