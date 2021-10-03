import React from "react";

import Colors_services from "./Colors_layout";

export default class NavigationSettings{

    static navigationOptions = {
        headerStyle:{
            backgroundColor: `${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
          },
        headerTintColor:'white'
    };

    static navigationOptionsDynamic = (props) => {

        console.log(props);

        return (
            {
                title: (props.title !== undefined ? props.title : ""), 
                headerStyle:{
                    backgroundColor: `${Colors_services.Get_ColorsPack()["Roxo_escuro"]}`,
                },
                headerTintColor:'white'
            }
        )
    }

}