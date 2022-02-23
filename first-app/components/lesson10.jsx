import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";

export default function Lesson10() {
  const [todos, setTodos] = useState([
    { text: "Comer", key: "1" },
    { text: "Beber", key: "2" },
    { text: "Jogar", key: "3" },
    { text: "Dormir", key: "4" },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 20,
  },
});
