import React, { useEffect } from "react";

import { StyleSheet, TouchableOpacity, Image, View, Alert } from "react-native";
import { dataIcons } from "../utils/Logo";
import * as RootNavigation from '../../utils/Navigate';

import { useDispatch, useSelector } from "react-redux";
import { setSeries } from "../../store/serieslice";
import RemoveItemArray from "../../utils/RemoveItem";
import { UpdateSeries } from "../utils/UpdateSeries";

import APIServices from "../../APIServices/APIServices";

export default function ButtonDelete(props){

    const item = useSelector((state) => state.series.item_detail);

    const token = useSelector((state) => state.login_reducer.token); 

    const Pressing_btnDelete = () => {

        try{
            APIServices.DetailSeries(token, item.payload.id, {type:'DELETE'})
            .then( response => {
                UpdateSeries().then(() => {
                    RootNavigation.navigate('Landing');
                })
            })
        } 
        catch(error){
            console.log(error.response.data);
        }
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
