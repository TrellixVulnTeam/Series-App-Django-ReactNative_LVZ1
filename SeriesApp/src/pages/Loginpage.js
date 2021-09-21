import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginHeader from '../components/LoginHeader';
import FormLogin from '../components/FormLogin';
import ButtomLogin from '../components/ButtomLogin';

import { useSelector } from 'react-redux';
import store from '../store/store';

export default class Loginpage extends React.Component{
    constructor(props){
        super(props);

        const { navigation } = props;

        this.state = {
            error: false,
            loading: false,
            navigation: navigation,
            teste: 0
        }
    }

    componentDidUpdate(state, props){
        this.setState({teste:store.getState().username});
        console.log(this.state.teste);
    }

    render(){
        return (
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={style.container}>
                    <LoginHeader />
                    <FormLogin />
                    <ButtomLogin navigation={this.state.navigation} />
                </KeyboardAwareScrollView>
        )
    }
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'white',
        flexShrink: 0,
        flexGrow: 1
    },
})