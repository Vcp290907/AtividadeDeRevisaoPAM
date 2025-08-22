import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";

export default function TelaLogin() {
  const [senhaEsq, setsenhaEsq] = useState(true);
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

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
                <View style={styles.containerSenha}>
                    <TextInput 
                        secureTextEntry={senhaEsq} 
                        style={styles.senhaInput} 
                        placeholder='Digite sua senha'
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity 
                        style={styles.eyeIcon}
                        onPress={() => setsenhaEsq(!senhaEsq)}
                    >
                        <Text style={styles.olinho}>{senhaEsq ? '👁️' : '🙈'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divLembrarsenha}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <Text style={{ fontSize: 12 }}>Lembrar senha</Text>
                </View>
                <Text style={{ fontSize: 12 }}>
                    Esqueci minha senha
                </Text>
            </View>
            <View style={styles.divBotao}>
                <TouchableOpacity style={styles.botao1}>
                    <Text style={styles.textoBotao1}>Acesse</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao2}>
                    <Text style={styles.textoBotao2}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.divContinueCom}>
            <View style={styles.linhaComTexto}>
                <View style={styles.linha}></View>
                <Text style={styles.textoContinue}>Ou continue com</Text>
                <View style={styles.linha}></View>
            </View>
            
            <View style={styles.divIcones}>
                <TouchableOpacity style={styles.botaoIcone}>
                    <Image 
                        source={require('../assets/Google.png')} 
                        style={styles.icone}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoIcone}>
                    <Image 
                        source={require('../assets/Facebook.png')} 
                        style={styles.icone}
                    />
                </TouchableOpacity>
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
    containerSenha: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#bec3c7',
        width: '90%',
        height: 60,
        borderRadius: 8,
        paddingLeft: 15,
    },
    senhaInput: {
        flex: 1,
        height: '100%',
    },
    eyeIcon: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    olinho: {
        fontSize: 18,
    },
    divLembrarsenha: {
        width: '90%',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    divBotao: {
        height: 50,
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    botao1: {
        backgroundColor: '#56c859',
        width: '45%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao2: {
        backgroundColor: '#fff',
        width: '45%',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000ff',
    },
    textoBotao1:{
        color: '#fff',
        fontSize: 16,
    },
    textoBotao2:{
        color: '#000000ff',
        fontSize: 16,
    },
    divOutrasOpcoes: {
        marginTop: 35,
    },
    divContinueCom: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 25,
    },
    linhaComTexto: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        marginBottom: 25,
    },
    linha: {
        flex: 1,
        height: 1,
        backgroundColor: '#bec3c7',
    },
    textoContinue: {
        marginHorizontal: 15,
        fontSize: 14,
        color: '#666',
    },
    divIcones: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        width: '90%',
    },
    botaoIcone: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f8f9fa',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    icone: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
});