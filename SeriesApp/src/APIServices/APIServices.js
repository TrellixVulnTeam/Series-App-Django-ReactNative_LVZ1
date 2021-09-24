import React from 'react';
import axios from 'axios';
import { Link } from '@react-navigation/native';

export const Server_link = 'https://miketrctw.pythonanywhere.com/api/';

export const Server_linkMain = 'https://miketrctw.pythonanywhere.com'

export default class APIServices{
     
    static AuthUser(obj_user){
        let Link_auth = Server_link + 'auth/';
        
        return axios.post(Link_auth, obj_user);
    }

    static SingupUser(obj_user){
        let Link_auth = Server_link + 'singup/';

        return axios.post(Link_auth, obj_user);
    }
    
    static ListSeries(token){
        let Link_auth = Server_link + 'series/';

        return axios.get(Link_auth , {
            headers:{Authorization: `Token ${token.payload}`},
        });
    }

    static ListSeries_page(token, limit1, limit2){
        let Link_auth = Server_link + `series/pagination/${limit1}=${limit2}`;
        console.log(token);
        return axios.get(Link_auth , {
            headers:{Authorization: `Token ${token.payload}`},
        });
    }

    static DetailSeries(token, id, action){
        let Link_auth = Server_link + `series/detail=${id}`;

        switch (action.type){
            case 'DELETE':
                return axios.delete(Link_auth, {
                    headers:{Authorization: `Token ${token.payload}`},
                })

            case 'UPDATE':
                const obj_updateParam = Object.assign({headers:{Authorization: `Token ${token.payload}`}}, action.payload);
                return axios.put(Link_auth, obj_updateParam);

            case 'GET':
                return axios.get(Link_auth, {
                    auth: `Token ${token.payload}`
                });

            case 'POST':
                Link_auth = Server_link + 'series/';
                const obj_postParam = Object.assign({headers:{Authorization: `Token ${token.payload}`}}, action.payload);
                return axios.post(Link_auth, obj_postParam);
        }
    }
}