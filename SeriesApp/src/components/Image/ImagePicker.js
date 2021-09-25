import React from 'react';

import { launchImageLibrary } from "react-native-image-picker";
import store from '../../store/store';

import { useDispatch } from 'react-redux';

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
    const dispatch = useDispatch();

    pickImageHandler = () => {
        launchImageLibrary({title: "Pick an Image"}, res => {
          if (res.didCancel) {
            console.log("User cancelled!");
          } else if (res.error) {
            console.log("Error", res.error);
          } else {
                dispatch(imgUrlSet({type:"set", payload:{image:{uri:res.uri}}}))
          }
        });
    }

    return(
        <View style={style.container}>
            <View style={style.imgView}>
                <Image 
                    source={imgUrl}
                />
            </View>
            <View>
                <Button  
                    title="pick image"
                    onPress={pickImageHandler()}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    imgView:{

    }
})