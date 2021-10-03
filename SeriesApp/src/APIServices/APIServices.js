import React from 'react';
import axios from 'axios';
import { getStateFromPath, Link } from '@react-navigation/native';
import { Platform } from 'react-native';

export const Server_link = 'https://miketrctw.pythonanywhere.com/api/';

export const Server_linkMain = 'https://miketrctw.pythonanywhere.com'

export default class APIServices{
     
    static AuthUser(obj_user){
        let Link_auth = Server_link + 'auth/';
        
        return axios.post(Link_auth, obj_user);
    }

    static SingupUser(obj_user){
        let Link_auth = Server_link + 'singup/';
        console.log(Link_auth);
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
                    headers:{Authorization: `Token ${token.payload}`},
                });
        }
    }

    static PostSerie(token, obj_json, imageUrl){
        var imageUri = imageUrl.payload.image;
       
        var image = {
            uri: Platform.OS === "android" ? imageUri.uri : imageUri.uri.replace("file://", ""),
            type: `image/jpeg`, 
            name: 'imagem'
        }

        var form = new FormData();
        form.append("title", obj_json.title);
        form.append("note", obj_json.note);
        form.append("description", obj_json.description);
        form.append('img_series', image);

        const url_link = Server_link +  'series/';

        return axios.post(url_link, form, {
            headers:{
                'Content-Type':'multipart/form-data',
                'Authorization':`Token ${token}`,
                'Accept':'application/json',
            }
        })
    }
}