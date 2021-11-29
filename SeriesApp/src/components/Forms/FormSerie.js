import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import Colors_services from '../../utils/Colors_layout';
import Size_services from '../../utils/Size_layout';
import Imagepicker from '../Image/ImagePicker';

import { useDispatch, useSelector } from 'react-redux';
import { descriptionSet, genreSet, titleSet } from '../../store/postslice';
import IntegerInput from '../Inputs/IntegerInput';
import Warning from '../utils/Warning';

export default function FormSerie(props){
    const { error, error_message } = props;

    const [ genreString, setGenreString ] = useState("");
    // const [ title, setTilt ] = useState("");
    // const [ description, setDesc ] = useState("");

    const title = useSelector((state) => state.post_serie_reducer.title);
    const description = useSelector((state) => state.post_serie_reducer.description);

    const Get_genreList = () => {
        const genreList = genreString.split(',');

        dispatch(genreSet({type:'set', payload:genres_list}));
    }

    const onChangeTitle = (text) => {
        dispatch(titleSet({type:'set', payload:text}));
    }

    const onChangeDescription = (text) => {
        dispatch(descriptionSet({type:'set', payload:text}));
    }

    const dispatch = useDispatch();

    return(
        <View style={style.container}>
            { error ? <Warning  error_message={error_message}/> : null }
            <View style={style.view_input}>
                <Text style={style.input}>Title</Text>
                <TextInput
                    value={title.payload}
                    onChangeText={(value) => { onChangeTitle(value) }}
                    multiline={true}
                    style={style.textinput}
                />
            </View>
            <View style={style.view_input}>
                <Text style={style.input}>Note</Text>
                <IntegerInput />
            </View>
            <View style={style.view_input}>
                <Text style={style.input}>Imagem</Text>
                <Imagepicker />
            </View>
            <View style={style.view_input}>
                <Text style={style.input}>Genres</Text>
                <TextInput
                    value={genreString}
                    onChangeText={(value) => {setGenreString(value)}}
                    multiline={true}
                    style={style.textinput}
                />
            </View>
            <View style={style.view_input}>
                <Text style={style.input}>Description</Text>
                <TextInput
                    value={description.payload}
                    onChangeText={(value) => {onChangeDescription(value)}}
                    multiline={true}
                    numberOfLines = {4}
                    style={style.textinput}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:4,
        justifyContent:'flex-start',
        marginBottom: 20
    },
    view_input:{
        flex:1,
        padding:5,
        justifyContent:'flex-start',
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