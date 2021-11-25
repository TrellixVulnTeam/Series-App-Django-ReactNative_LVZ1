import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Server_linkMain } from '../../APIServices/APIServices';
import Colors_services from '../../utils/Colors_layout';

import { Dimensions } from 'react-native';
import { row } from '../Grid/ListSeries';

import * as RootNavigation from '../../utils/Navigate';

export default function SerieContainer(props){

    const { serie } = props;

    return(
        <View style={style.container}>
            <TouchableOpacity style={style.touchStyle}
                onPress={() => {
                    console.log(serie.item);
                    RootNavigation.navigate("DetailPage", {detail:serie.item});
                }}
            >
                <View style={style.imgContainer}>
                    <Image
                        style={style.imageStyle}
                        source={{
                            uri: Server_linkMain + serie.item.img_series,
                        }}
                    />
                </View>
                <View style={style.headerContainer}>
                    <Text style={style.headerStyle}>{serie.item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        height:250,
        margin:10,
    },
    imageStyle:{
        flex:1,
    },
    imgContainer:{
        flex:6
    },
    headerContainer:{
        flex:1,
        backgroundColor: `${Colors_services.Get_ColorsPack()["Cinza_escuro"]}`,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerStyle:{
        color: 'white'
    },
    touchStyle:{
        flex:1
    }
})