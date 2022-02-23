import { useState } from "react";
import {
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Lesson9() {
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

  const pressHandler = (id) => {
      setPeople((prevPeople) => {
        return prevPeople.filter(person => person.id != id)
      })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
