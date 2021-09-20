import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
import { OnchangeUsername, OnchangePassword } from '../store/counterslice';

import Colors_services from '../utils/Colors_layout';

const FormLogin = (props) => {
    const username = useSelector((state) => state.login_reducer.username);
    const password = useSelector((state) => state.login_reducer.password);
    const dispatch = useDispatch();

    const OnUsernameChange = (value) => {
        dispatch(OnchangeUsername({type:'username_change', payload:value}));
        console.log(username.payload);
    }

    const OnPasswordChange = (value) => {
        dispatch(OnchangePassword({type:'password_change', payload:value}));
    }

    return(
        <View style={style.container}>
            <View style={style.view_input}>
                <Text style={style.input}>Username</Text>
                <TextInput
                    value={username.payload}
                    onChangeText={(value) => OnUsernameChange(value)}
                    multiline={true}
                    style={style.textinput}
                />
            </View>
            <View style={style.view_input}>
                <Text style={style.input}>Password</Text>
                <TextInput
                    placeholder="********"
                    value={password.payload}
                    secureTextEntry={true}
                    onChangeText={(value) => OnPasswordChange(value)}
                    style={style.textinput}
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around'
    },
    view_input:{
        flex:1
    },
    textinput:{
        height:60,
        flex:1,
        borderBottomWidth : 1.0
    },
    input:{
        color: `${Colors_services.Get_ColorsPack()["Roxo_claro"]}`
    }
})

export default FormLogin;