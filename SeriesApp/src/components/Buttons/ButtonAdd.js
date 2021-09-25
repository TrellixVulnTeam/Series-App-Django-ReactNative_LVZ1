import React from "react";

import { Button } from "react-native";
import Colors_services from "../../utils/Colors_layout";
import * as RootNavigation from '../../utils/Navigate';

export default function ButtonAdd(props){
    const { name, title } = props;


    return (
        <Button
            onPress={() => {RootNavigation.navigate(name)}}
            title={title}
            color={Colors_services.Get_ColorsPack()["Azul_claro"]}
        />
    )
}