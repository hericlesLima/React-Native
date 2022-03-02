import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FlatList } from "react-native";
import AddTodos from "../components/addTodo";

import Header from "../components/header";
import TodoItems from "../components/todoItem";

export default function Lesson10() {
  const [todos, setTodos] = useState([
    { text: "Comer", key: "1" },
    { text: "Beber", key: "2" },
    { text: "Jogar", key: "3" },
    { text: "Dormir", key: "4" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Aviso", "No mínimo 3 caráteres", [{ text: "Entendido" }]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss(); // Press out of the keyboard make the keyboard dissapear
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 20,
  },
});
