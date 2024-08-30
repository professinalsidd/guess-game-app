import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import StartGame from "./src/screens/StartGame";
import { useState } from "react";
import GameScreen from "./src/screens/GameScreen";
import Colors from "./src/constants/colors";
import GameOverScreen from "./src/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessNum, setGuessNum] = useState(0);

  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const pickedHandler = (pickedNum) => {
    setUserNumber(pickedNum);
    setIsGameOver(false);
  };

  const gameOverHandler = (roundNum) => {
    setIsGameOver(true);
    setGuessNum(roundNum);
  };

  const gameRoundHandler = () => {
    setUserNumber(null);
    setGuessNum(0);
  };

  let screen = <StartGame pickedUpNumber={pickedHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} gameOver={gameOverHandler} />;
  }
  if (isGameOver && userNumber) {
    screen = (
      <GameOverScreen
        onStartGame={gameRoundHandler}
        roundNum={guessNum}
        userNum={userNumber}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.PRIMARY800, Colors.yellow]}
      style={styles.container}
    >
      <ImageBackground
        style={styles.container}
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        imageStyle={styles.backGroundImg}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backGroundImg: {
    opacity: 0.15,
  },
});
