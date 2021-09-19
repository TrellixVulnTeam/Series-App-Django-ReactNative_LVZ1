import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const FormLogin = (props) => {
    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");

    const OnUsernameChange = (value) => {
        console.log(setUsername);
        setUsername(value);    
        console.log(username);
    }

    const OnPasswordChange = (value) => {
        setPassword(value);
    }

    return(
        <View>
            <TextInput
                placeholder="Write your username"
                value={username}
                onChangeText={(value) => OnUsernameChange(value)}
            />
            <TextInput
                placeholder="********"
                value={password}
                secureTextEntry={true}
                onChangeText={(value) => OnPasswordChange(value)}
            />
        </View>
    );
}

export default FormLogin;