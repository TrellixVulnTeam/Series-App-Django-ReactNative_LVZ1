import React from 'react';

import { FlatList, View, Text, StyleSheet } from 'react-native';

import SerieContainer from '../Itens/SerieContainer';

export const row = 2;

export default function ListSeries (props){

    const { series } = props;

    console.log(series);

    return(
        <View>
            <FlatList 
                style={style.container}
                data={series}
                numColumns={row}
                renderItem={(item) => {return <SerieContainer serie={item} />}}
                keyExtractor={(item) => item.id}
            />
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
    }
})