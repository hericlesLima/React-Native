import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Lesson6() {
  const [people, setPeople] = useState([
    { name: "Cap", key: "1" },
    { name: "Bruno", key: "2" },
    { name: "Hery", key: "3" },
    { name: "Luis", key: "4" },
    { name: "Nelson", key: "5" },
    { name: "Lauro", key: "6" },
    { name: "John", key: "7" },
    { name: "Maria", key: "8" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    borderRadius: 7,
  },
});
