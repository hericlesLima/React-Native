import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    padding: 50,
    backgroundColor: "coral",
  },

  title: {
      textAlign: 'center',
      color: "#fff",
      fontSize: 20,
      fontWeight: 'bold',
  }
});
