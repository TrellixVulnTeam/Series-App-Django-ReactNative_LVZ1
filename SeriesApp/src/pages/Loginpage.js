import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginHeader from '../components/Headers/LoginHeader';
import FormLogin from '../components/Forms/FormLogin';
import ButtomLogin from '../components/Buttons/ButtomLogin';

import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store';

import APIServices from '../APIServices/APIServices';
import { TokenSet } from '../store/counterslice';
import Colors_services from '../utils/Colors_layout';

const Loginpage = (props) => {
    const { navigation } = props;

    const [ error, setError ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ error_message, setMessage ] = useState("");

    const dispatch = useDispatch();

    const OnPress_SingIn = (obj_user) => {
        setLoading(true);
        APIServices.AuthUser(obj_user).then(response => {
            dispatch(TokenSet({type:"token_set",payload:response.data.token}));
            setLoading(false);
            setError(false);
            navigation.navigate("Register");
        })
        .catch((error) => {
            setLoading(false);
            setError(true);
            setMessage(error.response.data.non_field_errors);
        })
    }

    const Render_handling_login = () => {
        if (loading){
            return(
                <View style={style.viewStyle}> 
                    <ActivityIndicator size="large" color={Colors_services.Get_ColorsPack()["Roxo_escuro"]} />
                </View>
            );
        }
        else{
            return(
                <KeyboardAwareScrollView keyboardShouldPersistTaps={'always'}
                    contentContainerStyle={style.container}>
                    <LoginHeader />
                    <FormLogin error={error} error_message={error_message}/>
                    <ButtomLogin navigation={navigation} OnPress_SingIn={OnPress_SingIn} />
                </KeyboardAwareScrollView>
            );
        }
    }

    return (
        <View style={{flexGrow:1}}>
            {Render_handling_login()}
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        padding: 20,
        backgroundColor: 'white',
        flexShrink: 0,
        flexGrow: 1
    },
    viewStyle:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
})

export default Loginpage;