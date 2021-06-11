import {
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import React, { useState, useContext } from "react";

const SignIn = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleUsuario(usuario) {
    setUsuario(usuario);
  }
  function handleSenha(senha) {
    setSenha(senha);
  }

  function handleSignIn() {}

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleUsuario}
          placeholder="Usuario"
          clearButtonMode="always"
        />
        <TextInput
          style={styles.input}
          onChangeText={handleSenha}
          placeholder="Senha"
          clearButtonMode="always"
        />
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Entrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2691E",
    alignItems: "center",
    justifyContent: "center",
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

export default SignIn;
