import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors_services from '../../utils/Colors_layout';
import Size_services from '../../utils/Size_layout';

import { useDispatch } from 'react-redux';
import store from '../../store/store';
import { titleSet } from '../../store/postslice';

export default function FormSerie(props){
    const { error, error_message } = props;

    const title = store.getState().post_serie_reducer.title;

    const dispatch = useDispatch();

    return(
        <View style={style.container}>
            { error ? <Warning  error_message={error_message}/> : null }
            <View style={style.view_input}>
                <Text style={style.input}>title</Text>
                <TextInput
                    value={title.payload}
                    onChangeText={(value) => {dispatch(titleSet({type:"set", payload:value}))}}
                    multiline={true}
                    style={style.textinput}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:4
    },
    view_input:{
        flex:1,
        padding:5,
    },
    textinput:{
        backgroundColor: `${Colors_services.Get_ColorsPack()["Cinza_claro"]}`,
        padding:5,
        borderRadius: 10,
        minHeight: Size_services.Get_SizePack()["layout_form_height"]
    },
    input:{
        color: `${Colors_services.Get_ColorsPack()["Roxo_claro"]}`,
        marginBottom: 5
    }
})