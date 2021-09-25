import { setStatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors_services from '../../utils/Colors_layout';

const ButtonRegister = (props) => {

    const { navigation } = props;

    const OnPress_Singin = () => {
        navigation.navigate('Login');
    }

    const OnPress_Btn = () => {
        props.Handler_changes();
    }

    return(
        <View style={style.container}>
            <Button
                style={style.buttomStyle}
                title="Sing up"
                color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}
                onPress={() => OnPress_Btn()}
            />
            <Text style={[style.inputColor, style.inputBottom]}>Already have an account? 
                <Text style={style.inputStrongColor} onPress={() => {OnPress_Singin()}}> Sing in!</Text>
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    inputColor:{
        color: `${Colors_services.Get_ColorsPack()["Azul_claro"]}`,
    },
    inputTop:{
        marginBottom:20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputBottom:{
        marginTop:20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputStrongColor:{
        color: `${Colors_services.Get_ColorsPack()["Azul_escuro"]}`
    },
    container:{
        flex:1.5,
        justifyContent: 'center'
    },
    buttomStyle:{
    }
})

export default ButtonRegister;