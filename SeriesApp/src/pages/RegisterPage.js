import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegisterHeader from '../components/Headers/RegisterHeader';
import FormRegister from '../components/Forms/FormRegister';
import ButtomRegister from '../components/Buttons/ButtomRegister';

import { useSelector } from 'react-redux';

import Message_errors from '../utils/Message_errors';
import Validators from '../utils/Validators';

import APIServices from '../APIServices/APIServices';
import Colors_services from '../utils/Colors_layout';
import Warning from '../components/utils/Warning';

const RegisterPage = (props) => {
    const { navigation } = props;

    const username = useSelector((state) => state.login_reducer.username);
    const password = useSelector((state) => state.login_reducer.password);
    const email = useSelector((state) => state.login_reducer.email);
    const confirm_password = useSelector((state) => state.login_reducer.confirm_password);

    const [ error, setError ] = useState(false);
    const [ error_message, setMessage ] = useState("");

    const [ loading, setLoading ] = useState(false);

    const Redirect_user = () => {
        navigation.navigate("Login");
    }

    const Post_user = () => {
        setLoading(true);

        const obj_user = {
            username: username.payload,
            email: email.payload,
            password: password.payload
        }

        APIServices.SingupUser(obj_user)
        .then(response => {
            setLoading(false); setError(false);
            Alert.alert(
                'Success',
                'User account was created with success [Press Ok to Login]',
                [
                 {
                    text:"Ok",
                    onPress: () => {Redirect_user()}
                 }
                ]
            );
        })
        .catch(error => {
            setLoading(false); setError(true);
            Alert.alert(
                "error",
                "The app server side didn't send messages [Are you sure the API is working?]",
                {
                    text:"Ok",
                    onPress: () => {}
                }
            );
        })
    }

    const Handler_changes = () => {
        if ( Validators.Validate_nonEmptyInputList([username.payload, password.payload, confirm_password.payload, email.payload]) ){
            if ( Validators.Validate_EmailInput(email.payload) ){
                if ( Validators.Validate_MatchingPasswordInput(password.payload, confirm_password.payload) ){
                    Post_user();
                }
                else{
                    setError(true); setMessage(Message_errors.NotMatchingPasswordError());
                }
            }
            else{
                setError(true); setMessage(Message_errors.NotaEmailType());
            }
        }
        else{  
            setError(true); setMessage(Message_errors.InputIsEmpty());
        }
    }

    return (
            <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                contentContainerStyle={style.container}>
                <RegisterHeader />
                <FormRegister error={error} error_message={error_message} />
                { loading ? <View style={style.activityIndicatorStyle}><ActivityIndicator size="large" color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}/></View> 
                : <ButtomRegister navigation={navigation} Handler_changes={Handler_changes} />}
            </KeyboardAwareScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'white',
        flexShrink: 0,
        flexGrow: 1
    },
    activityIndicatorStyle:{
        flex: 1.5,
        justifyContent:'center'
    }
})

export default RegisterPage;