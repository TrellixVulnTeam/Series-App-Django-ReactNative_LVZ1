import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import Colors_services from '../../utils/Colors_layout';

export default function ButtomPostSerie(props){

    const PostSerie = () => {
        props.Handler_changes();
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
        flex:1
    },
    buttomStyle:{

    }
})