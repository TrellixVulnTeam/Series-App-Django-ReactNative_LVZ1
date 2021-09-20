import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginHeader from '../components/LoginHeader';
import FormLogin from '../components/FormLogin';
import ButtomLogin from '../components/ButtomLogin';

import { useSelector} from 'react-redux';

export default class Loginpage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <View style={style.container}>
                <LoginHeader />
                <FormLogin />
                <ButtomLogin />
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        padding: 20,
        paddingLeft: 30,
        paddingRight: 30
    }
})