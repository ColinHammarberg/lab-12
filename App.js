import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import React, { useState } from "react";

class Scene {
  constructor() {
    this.time = "Night";
    this.season = "Winter";
  }
  render(image, bg_color) {
    if (this.season == "Summer") {
      image = require("./pics/summer.png");
    } else if (this.season == "Autumn") {
      image = require("./pics/autumn.png");
    } else if (this.season == "Winter") {
      image = require("./pics/winter.png");
    } else if (this.season == "Spring") {
      image = require("./pics/spring.png");
    }
    if (this.time == "Day") {
      bg_color = "lightblue";
    } else if (this.time == "Night") {
      bg_color = "black";
    }
    return <Image source={image} style={{ backgroundColor: bg_color }} />;
  }
}

export default function App() {
  let scene1 = new Scene();
  const [rendered, setRendered] = useState(scene1.render());
  const [inputSeason, setInputSeason] = useState();
  const [inputTime, setInputTime] = useState();

  function showRenderedScene() {
    scene1.season = inputSeason;
    scene1.time = inputTime;
    setRendered(scene1.render());
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type of season"
        onChangeText={setInputSeason}
      />
      <TextInput
        style={styles.input}
        placeholder="Time on the day"
        onChangeText={setInputTime}
      />
      <Button title="Show Scene" onPress={showRenderedScene} />
      <Text>{rendered}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
    padding: 5,
    height: 40,
    width: "80%",
  },
});
