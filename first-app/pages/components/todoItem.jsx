import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodoItems(props) {
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          props.pressHandler(props.item.key);
        }}
      >
        <Text style={styles.item}>{props.item.text}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#4d4d4d",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    color: "#4d4d4d",
  },
});
