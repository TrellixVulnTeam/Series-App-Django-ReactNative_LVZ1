import React from "react";

import { Button, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors_services from "../../utils/Colors_layout";
import * as RootNavigation from '../../utils/Navigate';

import { dataIcons } from "../utils/Logo";

export default function ButtonAdd(props){

    const { name, title, nameIcon } = props;

    return (
        <TouchableOpacity
            onPress={() => {RootNavigation.navigate(name)}}
        >
            <Image 
                source={dataIcons[nameIcon]}
                style={style.styleImg}
            />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    styleImg:{
        width: 30,
        height: 30
    }
})