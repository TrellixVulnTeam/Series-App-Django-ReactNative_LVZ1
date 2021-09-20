import { setStatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors_services from '../utils/Colors_layout';

const ButtomRegister= (props) => {

    return(
        <View style={style.container}>
            <Text style={[style.inputStrongColor, style.inputTop]}>Forgot your password?</Text>
            <Button
                style={style.buttomStyle}
                title="Sing in"
                color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}
            />
            <Text style={[style.inputColor, style.inputBottom]}>Dont you have an account? 
                <Text style={style.inputStrongColor}> Register here!</Text>
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

export default ButtomRegister;