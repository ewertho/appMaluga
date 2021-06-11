import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Database from "../database/Database";
import { Feather as Icon } from "@expo/vector-icons";
import maluga from "../assets/oie_transparent.png";
import AppHeader from "../components/AppHeader";

export default function AppForm({ route, navigation }) {
  const id = route.params ? route.params.id : undefined;
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");

  useEffect(() => {
    if (!route.params) return;
    setDescricao(route.params.descricao);
    setQuantidade(route.params.quantidade.toString());
  }, [route]);

  function handleDescriptionChange(descricao) {
    setDescricao(descricao);
  }
  function handleQuantityChange(quantidade) {
    setQuantidade(quantidade);
  }

  async function handleButtonPress() {
    try {
      const listItem = { descricao, quantidade: parseInt(quantidade) };
      Database.saveItem(listItem, id).then((response) =>
        navigation.navigate("AppList", listItem)
      );
    } catch (error) {
      const listItem = {
        id: new Date().getTime(),
        descricao,
        quantidade: parseInt(quantidade),
      };

      let savedItems = [];
      const response = await AsyncStorage.getItem("items");

      if (response) savedItems = JSON.parse(response);
      savedItems.push(listItem);

      await AsyncStorage.setItem("items", JSON.stringify(savedItems));
      navigation.navigate("AppList", listItem);
    }
  }
  return (
    <View style={styles.container}>
      <AppHeader />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleDescriptionChange}
          placeholder="Descrição"
          clearButtonMode="always"
          value={descricao}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleQuantityChange}
          placeholder="Quantidade"
          keyboardType={"numeric"}
          clearButtonMode="always"
          value={quantidade.toString()}
        />
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <View style={styles.buttonContainer}>
            <Icon name="save" size={22} color="white" />
            <Text style={styles.buttonText}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2691E",
    alignItems: "center",
  },

  inputContainer: {
    marginTop: 30,
    width: "90%",
    padding: 20,
    borderRadius: 10,

    alignItems: "stretch",
    backgroundColor: "#fff",
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "stretch",
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: "blue",
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
