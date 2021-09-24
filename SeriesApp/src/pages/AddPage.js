import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormSerie from '../components/Forms/FormSerie';
import CreateHeader from '../components/Headers/CreateHeader';
import APIServices from '../APIServices/APIServices';
import store from '../store/store';
import ButtomPostSerie from '../components/Buttons/ButtomPostSerie';

export default function AddPage(props){

    const { navigation } = props;
    const token = store.getState().login_reducer.token;

    const Redirect_user = () => {
        navigation.navigate("Login");
    }

    const Post_Serie = (obj_params) => {
        setLoading(true);

        APIServices.DetailSeries(token, obj_params.id, {type:"POST"})
        .then(response => {
            setLoading(false); setError(false);
            Alert.alert(
                'Success',
                'Your Serie was created with success!',
                [
                 {
                    text:"Ok",
                    onPress: () => {navigation.navigate("Landing")}
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

    const Handler_changes = (obj_params) => {
        if ( Validators.Validate_nonEmptyInputList([username.payload, password.payload, confirm_password.payload, email.payload]) ){
            Post_Serie(obj_params);
        }
        else{  
            setError(true); setMessage(Message_errors.InputIsEmpty());
        }
    }

    return(
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={style.container}>
            <CreateHeader />
            <FormSerie />
            <ButtomPostSerie Handler_changes={Handler_changes}/>
        </KeyboardAwareScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        flexGrow:1,
        paddingHorizontal:20
    }
})