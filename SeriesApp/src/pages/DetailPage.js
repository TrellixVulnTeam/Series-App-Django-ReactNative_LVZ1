import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Server_linkMain } from '../APIServices/APIServices';
import Colors_services from '../utils/Colors_layout';

import { Dimensions } from 'react-native';

import IsPortrait from '../components/utils/IsPortrait';

export default function DetailPage(props){

    const { detail } = props.route.params;

    return(
        <ScrollView style={style.container}>
            <View style={style.imgContainer}>
                <Image 
                    style={style.imgStyle}
                    source={{uri:  Server_linkMain + detail.item.img_series}}
                />
            </View>
            <View style={style.metaContainer}>
                <View style={style.dadosContainer}>
                    <Text style={[style.styleStr, {fontSize:25}]}> {detail.item.title} </Text>
                    <Text style={style.styleStr}>Note: <Text>{detail.item.note}</Text> </Text>
                    <Text style={{fontSize:25}}> {detail.item.description} </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    container:{
        flexGrow:1,
    },
    imgContainer:{
        flex:1,
        height: { IsPortrait.isPortrait() ? Dimensions.get('window').height * 0.7 : Dimensions.get('window').widht * 0.7},
        padding:80,
        paddingLeft:80,
        paddingRight:80
    },
    imgStyle:{
        flex:1
    },
    metaContainer:{
        flex:1,
    },
    dadosContainer:{
        flex:1,

    },
    styleStr:{
        color: `${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
        fontWeight: 'bold'
    }
});