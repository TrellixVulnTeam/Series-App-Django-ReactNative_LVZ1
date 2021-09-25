import { setStatusBarStyle } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

import Colors_services from '../../utils/Colors_layout';

const ButtonLogin = (props) => {

    const { navigation } = props;

    const OnPress_Register = () => {
        navigation.navigate('Register');
    }

    const username = useSelector((state) => state.login_reducer.username);
    const password = useSelector((state) => state.login_reducer.password);

    const OnPress_SingIn = () => {
        props.OnPress_SingIn({username:username.payload, password:password.payload});
    }

    return(
        <View style={style.container}>
            <Button
                style={style.buttomStyle}
                title="Sing in"
                color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}
                onPress={() => OnPress_SingIn()}
            />
            <Text style={[style.inputColor, style.inputBottom]}>Dont you have an account? 
                <Text style={style.inputStrongColor} onPress={() => {OnPress_Register()}} > Register here!</Text>
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

export default ButtonLogin;