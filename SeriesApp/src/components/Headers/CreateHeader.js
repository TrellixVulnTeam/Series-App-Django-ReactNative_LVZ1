import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors_services from '../../utils/Colors_layout';
import Size_services from '../../utils/Size_layout';

export default function CreateHeader(props){

    return(
        <View style={style.container}>
            <Text style={style.textStyle}>New Serie</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:`${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
        fontSize: Size_services.Get_SizePack()["font_size_header"] - 10 
    }
})