import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { Server_linkMain } from '../../APIServices/APIServices';
import Colors_services from '../../utils/Colors_layout';

import { Dimensions } from 'react-native';
import { row } from '../Grid/ListSeries';

export default function SerieContainer(props){

    const { serie } = props;

    console.log(serie);
    console.log(Server_linkMain + serie.item.img_series);
    console.log(Dimensions.get('window').width/row);

    return(
        <View style={style.container}>
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
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        height: Dimensions.get('window').width / row,
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
    }
})