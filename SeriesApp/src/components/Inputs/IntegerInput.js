import React, { useState } from 'react';

import store from '../../store/store';

import { View, Text, StyleSheet, Button } from 'react-native';
import Colors_services from '../../utils/Colors_layout';
import { useDispatch } from 'react-redux';
import { noteSet } from '../../store/postslice';

export default function IntegerInput(props){

    const note = store.getState().post_serie_reducer.note; 
    const [ noteState, setNote ] = useState(0);

    const dispatch = useDispatch();

    const addNote = (action) => {
        { action.type === 'decrease' ? ( noteState > 0 ? setNote(noteState - action.payload) : null ) :
        ( noteState < 10 ? setNote(noteState + action.payload) : null ) }

        dispatch(noteSet({type:'set',payload:noteState}));
    }

    return(
        <View style={style.container}>
            <View style={style.btnContainer}>
                <Button 
                    title="-"
                    onPress={() => addNote({type:'decrease', payload:1})}
                />
            </View>
            <View style={style.numberContainer}>
                <Text style={{fontSize:25}}>
                    {noteState}
                </Text>
            </View>
            <View style={style.btnContainer}>
                <Button 
                    title="+"
                    onPress={() => addNote({type:'increase', payload:1})}
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingRight: 30
    },
    numberContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors_services.Get_ColorsPack()["Cinza_claro"]
    },
    btnContainer:{
        flex:2
    },
})