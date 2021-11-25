import React, { useState } from 'react';

import { View, Text, StyleSheet, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import FormSerie from '../components/Forms/FormSerie';
import CreateHeader from '../components/Headers/CreateHeader';
import APIServices from '../APIServices/APIServices';
import store from '../store/store';
import ButtonPostSerie from '../components/Buttons/ButtonPostSerie';
import { useDispatch, useSelector } from 'react-redux';
import { imgUrlSet } from '../store/postslice';
import { setSeries } from '../store/serieslice';
import { initialStateValue } from './LandingPage';

import {UpdateSeries} from '../components/utils/UpdateSeries'; 

export default function AddPage(props){

    const { navigation } = props;
    const token = store.getState().login_reducer.token;

    const [ error, setError ] = useState(false);
    const [ error_message, setMessage ] = useState("");
    const [ loading, setLoading ] = useState(false);

    const imgUrl = useSelector((state) => state.post_serie_reducer.imgUrl);

    const Update_series = () => {
        UpdateSeries().then(() => {
            navigation.navigate("Landing");
        })
        .catch(error => {console.log(error)});
    }

    const Post_Serie = (obj_params) => {
        setLoading(true);
        APIServices.PostSerie(token.payload, obj_params, imgUrl)
        .then(response => {
            setLoading(false); setError(false);
            Alert.alert(
                'Success',
                'Your Serie was created with success!',
                [
                 {
                    text:"Ok",
                    onPress: () => {Update_series()}
                 }
                ]
            );
        })
        .catch(error => {
            setLoading(false); setError(true); setMessage(error.message);
            console.log(JSON.stringify(error));
            Alert.alert(
                "error",
                `${JSON.stringify(error.response.data)}`,
               [ {
                    text:"Ok",
                    onPress: () => {}
                }]
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