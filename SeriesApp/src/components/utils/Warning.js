import React from 'react';
import Colors_services from '../../utils/Colors_layout';

import { StyleSheet, View, Text} from 'react-native';

const Warning = (props) => {
    return (
        <View>
            <Text style={style.textStyle}> {props.error_message}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle:{
        color: `${Colors_services.Get_ColorsPack()["Vermelho_escuro"]}`
    }
});

export default Warning;