import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginHeader from '../components/LoginHeader';
import FormLogin from '../components/FormLogin';

export default class Loginpage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            username: "",
            email:""
        }
    }

    render(){
        return (
            <View>
                <LoginHeader />
                <FormLogin />
            </View>
        )
    }
}