import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../style/style";

const Home = () => {
  const [mensagem, setMensagem] = useState("Olá, mundo!");

  const atualizarMensagem = () => {
    setMensagem("Nova mensagem atualizada!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <TouchableOpacity style={styles.button} onPress={atualizarMensagem}>
        <Text style={styles.buttonText}>Atualizar Mensagem</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
