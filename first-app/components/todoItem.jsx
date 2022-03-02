import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function TodoItems(props) {
  return (
    <View style={styles.item}>
      <Text>{props.item.text}</Text>
      <AntDesign
        name="delete"
        size={24}
        color="#4d4d4d"
        onPress={() => {
          Alert.alert("Aviso", "Deseja apagar este item?", [
            { text: "Sim", onPress() { props.pressHandler(props.item.key)}},
            { text: "Não" },
          ]);
         
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 16,
    borderColor: "#4d4d4d",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    color: "#4d4d4d",
  },
});
