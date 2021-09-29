import React from 'react';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import SerieContainer from '../Itens/SerieContainer';

export const row = 2;

export default function ListSeries (props){

    const { series } = props;

    return(
        <View style={style.container}>
            {series.length !== 0 ? <FlatList 
                style={style.container}
                contentContainerStyle={style.containerList}
                data={series}
                numColumns={row}
                renderItem={(item) => {return <SerieContainer serie={item} />}}
                keyExtractor={(item) => item.id}
            /> : null}
        </View>
    )
} 

const style = StyleSheet.create({
    listContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    container:{
        flex: 1,
    },
    containerList:{
        marginHorizontal: 15,
    }
})