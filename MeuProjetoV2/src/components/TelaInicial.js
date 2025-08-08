import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function TelaInicial() {
  return (
    <View style={styles.container}>
        <Image
            source={require("../assets/casual_dog.png")}
            style={styles.imagem}
        />
        <Text style={styles.textCabecalho}>Ótimo dia!</Text>
        <Text style={styles.textSubTitulo}>Como deseja acessar?</Text>
        <TouchableOpacity style={styles.botao1} onPress={() => alert('Toque Detectado')}>
            <Image
                source={require("../assets/Google.png")}
                style={styles.imgBotao}
            ></Image>
            <Text style={styles.textBotao}>Como deseja acessar?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2}>
            <Text style={styles.textSubTituloBotao}>Outras opções</Text>
        </TouchableOpacity>
    </View>
  );
}   

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textCabecalho: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#000',
    },
    textSubTitulo: {
        fontSize: 12,
        color: '#555',
        marginTop: 5,
    },
    imagem: {
      width: 250,
      height: 250,
      resizeMode: 'contain',
    },
    botao1: {
      width: 300,
      height: 50,
      backgroundColor: '#56c859',
      borderRadius: 5,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 45,
    },
    botao2:{
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    imgBotao: {
        width: 30, 
        height: 30, 
        marginRight: 10,
    },
    textBotao: {
      color: '#fff',
      fontSize: 16,
    },
    textSubTituloBotao: {
        color: '#555',
        fontSize: 16,
    }
});