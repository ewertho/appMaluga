import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function AppHeader() {
  return (
    <View style={styles.bar}>
      <Image source={maluga} style={styles.image} />
      <Text style={styles.title}>Adicionar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    backgroundColor: "#fff",
    paddingBottom: 10,
    marginTop: 10,
    width: "100%",
  },
  image: {
    width: "20%",
    height: "40%",
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
});
