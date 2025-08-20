import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';

export default function TelaLogin() {
  return (
    <View style={styles.container}>
        <View style={styles.divLadeCima}>
            <Text style={styles.textoGrandeTitulo}>Acesse</Text>
            <Text style={styles.textoPequenoTitulo}>com E-mail e senha</Text>
        </View>
        <View style={styles.divMeio}>
            <View style={{ width: '100%'}}>
                <Text style={styles.textoPequeninihno}>E-mail</Text>
                <TextInput inputMode ="email" style={styles.input} placeholder='Digite seu E-mail'></TextInput>
            </View>
            <View style={{ width: '100%'}}>
                <Text style={styles.textoPequeninihno}>Senha</Text>
                <TextInput textContentType='password' style={styles.input} placeholder='Digite sua senha'></TextInput>
            </View>

            <View styles={styles.divSenha}>
                
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    divLadeCima:{
        width: '100%',
        marginTop: 15,
        marginLeft: 25,
        alignItems: 'flex-start',
    },
    textoGrandeTitulo: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
    },
    textoPequenoTitulo: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    divMeio: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 25,
        display: 'flex',
        gap: 25,
    },
    textoPequeninihno: {
        fontSize: 12,
        color: '#000',
    },
    input:{
        backgroundColor: '#bec3c7',
        width: '90%',
        height: 60,
        borderRadius: 8,
        paddingLeft: 15,
    },
    divSenha: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 25,
    },
});