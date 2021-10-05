import React, { useEffect } from "react";

import { StyleSheet, TouchableOpacity, Image, View, Alert } from "react-native";
import { dataIcons } from "../utils/Logo";
import * as RootNavigation from '../../utils/Navigate';

import store from "../../store/store";
import { useDispatch } from "react-redux";
import { setSeries } from "../../store/serieslice";

export default function ButtonDelete(props){

    const dispatch = useDispatch();
    const series = store.getState().series.series;

    const Pressing_btnDelete = () => {
        const Get_withoutElement = series;

        console.log(Get_withoutElement)

        dispatch(setSeries({type:"set",payload:undefined}))
        RootNavigation.navigate('Landing');
    }

    const AreyouSure = () => {
        Alert.alert(
            "Confirm",
            "Are you sure you wanna delete?",
            [
             {
                text:'Yes',
                onPress: () => {Pressing_btnDelete()}
             },
             {
                text:'No',
                onPress: () => {}
             },
            ]
        )
    }

    return(
        <TouchableOpacity
            onPress={() => {AreyouSure()}}
        >
            <Image 
                source={dataIcons['deleteIcon']}
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
