import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodos(props) {
  const [text, setText] = useState("");
  const [value, setValue] = useState("Add To Do");
  


  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={value}
        placeholderTextColor="#4d4d4d"
        onChangeText={changeHandler}
      />

      <Button
        onPress={() => {
          props.submitHandler(text);
        }}
        title="Submit"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#4d4d4d",
  },
});
