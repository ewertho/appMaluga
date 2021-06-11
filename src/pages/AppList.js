import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import AppItem from "../components/AppItem";
import Database from "../database/Database";
import maluga from "../assets/oie_transparent.png";
import AppHeader from "../components/AppHeader";

export default function AppList({ route, navigation }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Database.getItems().then((items) => setItems(items));
  }, [route]);

  return (
    <View style={styles.container}>
      <AppHeader />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.itemsContainer}
      >
        {items.map((item) => {
          return (
            <AppItem
              key={item.id}
              id={item.id}
              item={item.quantidade + "  de " + item.descricao}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2691E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  scrollContainer: {
    marginTop: 30,
    flex: 1,
    width: "90%",
  },
  bar: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    paddingBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  image: {
    width: "20%",
    height: "40%",
  },
  itemsContainer: {
    padding: 20,
    borderRadius: 10,
    alignItems: "stretch",
    backgroundColor: "#fff",
  },
});
