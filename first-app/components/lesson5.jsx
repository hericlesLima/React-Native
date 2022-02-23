import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";


export default function Lesson5() {
  const [name, setName] = useState("Hericles");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Insira um nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: John"
        onChangeText={(value) => setName(value)}
      />

      <Text>Insira a idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="ex: 20"
        keyboardType="numeric"
        onChangeText={(value) => setAge(value)}
      />
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
    borderColor: "#777",
    borderRadius: 7,
    padding: 8,
    margin: 10,
    width: 300,
  },
});
