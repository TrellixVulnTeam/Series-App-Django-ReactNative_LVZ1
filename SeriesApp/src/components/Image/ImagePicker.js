import React, { useEffect, useState } from 'react';

import store from '../../store/store';

import { useDispatch } from 'react-redux';

import * as ImagePicker from 'expo-image-picker';

import {
    StyleSheet,
    Text,
    View,
    Image,
    Button
  } from 'react-native';

import { imgUrlSet } from '../../store/postslice';

export default function Imagepicker(props){

    const imgUrl = store.getState().post_serie_reducer.imgUrl;
    const [ Url, setUrl ] = useState("");
    const dispatch = useDispatch();


    useEffect(() => {
        (async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        quality: 1,
        });

        if (!result.cancelled) {
            dispatch(imgUrlSet({type:'set', payload:{image:result}}));
            setUrl(result.uri);
        }
    };

    const pickImageHandler = () => {
        pickImage();
    }
    
    const reset = () => {
        dispatch(imgUrlSet({type:'set', payload:{image:""}}));
        setUrl("");
    }

    return(
        <View style={style.container}>
            <View style={style.imgView}>
                { Url !== "" ? <Image 
                    style={style.imgStyle}
                    source={{uri:Url}}
                /> : null}
            </View>
            <View style={style.btnContainer}>
                <Button  
                    title="pick image"
                    onPress={() => pickImageHandler()}
                />
                <Button  
                    title="reset"
                    onPress={() => reset()}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    btnContainer:{
        marginTop: 10,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgView:{
        flex:8
    },
    imgStyle:{
        flex:1
    }
})