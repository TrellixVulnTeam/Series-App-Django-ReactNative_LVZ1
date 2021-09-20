import { setStatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors_services from '../utils/Colors_layout';

const ButtomLogin = (props) => {

    return(
        <View style={style.container}>
            <Text style={style.inputStrongColor}>Forgot your password?</Text>
            <Button
                style={style.buttomStyle}
                title="Sing in"
                color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}
            />
            <Text style={style.inputColor}>Dont you have an account? 
                <Text style={style.inputStrongColor}> Register here!</Text>
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    inputColor:{
        color: `${Colors_services.Get_ColorsPack()["Azul_claro"]}`
    },
    inputStrongColor:{
        color: `${Colors_services.Get_ColorsPack()["Azul_escuro"]}`
    },
    container:{
        flex:2,
        justifyContent: 'space-around',
    },
    buttomStyle:{
    }
})

export default ButtomLogin;