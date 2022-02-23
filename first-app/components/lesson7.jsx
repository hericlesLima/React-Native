import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Lesson7() {
  const [people, setPeople] = useState([
    { name: "Cap", id: "1" },
    { name: "Bruno", id: "2" },
    { name: "Hery", id: "3" },
    { name: "Luis", id: "4" },
    { name: "Nelson", id: "5" },
    { name: "Lauro", id: "6" },
    { name: "John", id: "7" },
    { name: "Maria", id: "8" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item) => {item.id}}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
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
