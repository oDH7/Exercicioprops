import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Mensagem from "./Mensagem";

const Home = () => {
  const [mensagem, setMensagem] = useState("Olá, mundo!");

  const atualizarMensagem = () => {
    setMensagem("Nova mensagem atualizada!");
  };

  return (
    <View style={styles.container}>
      <Mensagem
        mensagem={mensagem}
        estilo={styles.mensagem}
        atualizarMensagem={atualizarMensagem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mensagem: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Home;
