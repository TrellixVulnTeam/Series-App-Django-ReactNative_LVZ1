import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import store from '../../store/store';

import Colors_services from '../../utils/Colors_layout';

export default function ButtonPostSerie(props){

    const title = store.getState().post_serie_reducer.title;
    const description = store.getState().post_serie_reducer.description;
    const note = store.getState().post_serie_reducer.note;

    const PostSerie = () => {
        props.Handler_changes({title:title.payload, description:description.payload, note:note.payload});
    }

    return(
        <View style={style.container}>
            <Button 
                style={style.buttomStyle}
                title="Post"
                color={Colors_services.Get_ColorsPack()["Roxo_escuro"]}
                onPress={() => PostSerie()}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 20
    },
    buttomStyle:{

    }
})