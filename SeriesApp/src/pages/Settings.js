import React from 'react';

import { View, StyleSheet, FlatList, Alert } from 'react-native';
import SettingsItens from '../components/Itens/SettingsItens';
import { LOGOUT_IMAGE, INFORMATION_IMAGE } from '../utils/Images';

import store from '../store/store';
import { reset } from '../store/counterslice';

const Reset_store = () => {
    Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
            {
                text: "yes",
                onPress: () => {store.dispatch(reset());}
            },
            {
                text: "no",
                onPress: () => {}
            }
        ]
    )
}

const DATA_SETTINGS = [
    {
        title:'Logout',
        id:1,
        png_data: LOGOUT_IMAGE,
        action:{
            page:null,
            method:Reset_store,
        }
    },
    {
        title:'Information',
        id:2,
        png_data: INFORMATION_IMAGE,
        action:{
            page:'InformationPage',
            method:null,
        }
    }
]

export default function Settings(props){

    return(
        <View style={styles.container}>
            {DATA_SETTINGS.length !== 0 ? <FlatList 
                style={styles.container}
                contentContainerStyle={styles.containerList}
                data={DATA_SETTINGS}
                numColumns={1}
                renderItem={(item) => {return <SettingsItens data={item} />}}
                keyExtractor={(item) => item.id}
            /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerList:{

    }
})