import React, {useEffect, useState} from 'react';

import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';

import SerieContainer from '../Itens/SerieContainer';

export const row = 2;

export default function ListSeries (props){

    const { series } = props;
    const [DATA, setData] = useState([]);
    const [FakeDATA, setFakeData] = useState([])

    const fill_series = () => {
        const lines = parseInt(DATA.length / row) + 1;
        const qtd_serie_population = DATA.length;
        const max_serie_population = row * lines;
        
        for( var i=0; i < max_serie_population - qtd_serie_population; i++){
            const new_data = [...DATA, {title:'teste',description:'teste'}];
            setFakeData(new_data);
        }
    }

    useEffect(() => {
        if (series !== undefined){
            setData(series.payload);
            fill_series();
        }
    }, [series])

    return(
        <View style={style.container}>
            {DATA.length !== 0 ? <FlatList 
                style={style.container}
                contentContainerStyle={style.containerList}
                data={DATA}
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