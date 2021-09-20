import React from 'react';
import axios from 'axios';

const Server_link = 'https://miketrctw.pythonanywhere.com/api/';

export default class APIServices{
     
    function AuthUser(obj_user){
        let Link_auth = Server_link + 'auth';

        return axios.post(Link_auth, obj_user);
    }
}