import React, { useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormSerie from '../components/Forms/FormSerie';
import CreateHeader from '../components/Headers/CreateHeader';
import APIServices from '../APIServices/APIServices';
import store from '../store/store';
import ButtonPostSerie from '../components/Buttons/ButtonPostSerie';
import { useDispatch } from 'react-redux';
import { imgUrlSet } from '../store/postslice';

export default function AddPage(props){

    const { navigation } = props;
    const token = store.getState().login_reducer.token;

    const [ error, setError ] = useState(false);
    const [ error_message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const imgUrl = store.getState().login_reducer.imgUrl;

    const dispatch = useDispatch();

    const Post_Serie = (obj_params) => {
        setLoading(true);
        console.log(imgUrl ,"aqui");
        APIServices.PostSerie(token, obj_params, imgUrl)
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
            setLoading(false); setError(true); setMessage(error.message);
            console.log(JSON.stringify(error));
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
        Post_Serie(obj_params);
    }

    return(
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'} contentContainerStyle={style.container}>
            <CreateHeader />
            <FormSerie error={error} error_message={error_message}/>
            <ButtonPostSerie Handler_changes={Handler_changes}/>
        </KeyboardAwareScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        flexGrow:1,
        paddingHorizontal:20
    }
})