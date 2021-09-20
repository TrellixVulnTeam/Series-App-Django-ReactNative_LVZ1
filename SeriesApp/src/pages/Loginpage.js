import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginHeader from '../components/LoginHeader';
import FormLogin from '../components/FormLogin';
import ButtomLogin from '../components/ButtomLogin';

import { useSelector} from 'react-redux';

export default class Loginpage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error: false,
            loading: false,
        }
    }

    render(){
        return (
                <KeyboardAwareScrollView 
                    contentContainerStyle={style.container}
                    scrollEnabled={true}
                >
                    <LoginHeader />
                    <FormLogin />
                    <ButtomLogin />
                </KeyboardAwareScrollView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'column',
        flex:1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'white',
    },
})