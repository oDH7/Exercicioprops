import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Mensagem = ({ mensagem, estilo, atualizarMensagem }) => {
  return (
    <View style={styles.container}>
      <Text style={estilo}>{mensagem}</Text>
      <Button title="Atualizar Mensagem" onPress={atualizarMensagem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default Mensagem;
