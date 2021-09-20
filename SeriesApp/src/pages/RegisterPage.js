import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterHeader from '../components/RegisterHeader';
import FormRegister from '../components/FormRegister';
import ButtomRegister from '../components/ButtomRegister';

import { useSelector} from 'react-redux';

export default class RegisterPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error: false,
            loading: false,
        }
    }

    render(){
        return (
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={style.container}>
                    <RegisterHeader />
                    <FormRegister />
                    <ButtomRegister />
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