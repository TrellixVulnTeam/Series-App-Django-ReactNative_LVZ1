import React, { useEffect } from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Server_linkMain } from '../APIServices/APIServices';
import Colors_services from '../utils/Colors_layout';

import { Dimensions } from 'react-native';

import IsPortrait from '../components/utils/IsPortrait';
import { useDispatch } from 'react-redux';
import { setIndex, setItem } from '../store/serieslice';
import store from '../store/store';

import FindIndex from '../utils/FindIndex';

export default function DetailPage(props){

    const { detail } = props.route.params;
    const series = store.getState().series.series;

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setIndex({type:'set', payload:FindIndex(series.payload, detail)}));
        dispatch(setItem({type:'set', payload: detail}));
    }, [])

    return(
        <ScrollView style={style.container}>
            <View style={style.imgContainer}>
                <Image 
                    style={style.imgStyle}
                    source={{uri:  Server_linkMain + detail.img_series}}
                />
            </View>
            <View style={style.metaContainer}>
                <View style={style.dadosContainer}>
                    <Text style={[style.styleStr, {fontSize:25}]}>{detail.title} </Text>
                    <Text style={style.styleStr}> Note: <Text>{detail.note}</Text> </Text>
                    <View style={{marginTop: 10}}>
                        <Text style={[style.styleStr, {fontSize:20}]}> Description </Text>
                        <Text style={{fontSize:20}}> {detail.description} </Text>
                    </View>
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
        height: IsPortrait.isPortrait() ? Dimensions.get('window').height * 0.7 : Dimensions.get('window').width * 0.7,
        padding:60,
        paddingLeft:80,
        paddingRight:80
    },
    imgStyle:{
        flex:1
    },
    metaContainer:{
        flex:1,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    dadosContainer:{
        flex:1,
    },
    styleStr:{
        color: `${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
        fontWeight: 'bold'
    }
});