import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { useState, useEffect } from 'react';
import Colors_services from '../utils/Colors_layout';

import APIServices from '../APIServices/APIServices';

import store from '../store/store';
import Warning from '../components/utils/Warning';
import ListSeries from '../components/Grid/ListSeries';

const load_per_scroll = 10;

const LandingPage = (props) => {
    const [ series, setSeries ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ initialStateValue, setStateValue ] = useState(10);
    const [ error, setError ] = useState(false);
    const [ error_message, setMessage ] = useState("");

    const newSerie = store.getState().login_reducer.new_app;
    const token = store.getState().login_reducer.token;

    useEffect(() => {
        Get_series();
    }, [])

    useEffect(() => {
        Add_NewSerie()
    },[newSerie])

    const Add_NewSerie = () => {
        const series = [...series, newSerie];
        setSeries(series);
    }

    const Is_Loading = () => {
        if (loading){
            return (
                <View style={style.containerLoading}>
                    <ActivityIndicator size="large" color={Colors_services.Get_ColorsPack()["Roxo_escuro"]} />
                </View>
            )
        }
    }

    const Add_series = () => {
        APIServices.ListSeries_page(token, series.length, (series.length + load_per_scroll))
        .then(response => { 
            setSeries([...series, ...response.data]);
            setError(false);
        })
        .catch(error => {
            setError(true);
            setMessage(error.response.data);
        });
    }

    const Get_series = () => {
        setLoading(true);
        APIServices.ListSeries_page(token, 0, initialStateValue)
        .then(response => {
            setSeries(response.data);
            setLoading(false); setError(false);
        })
        .catch(error => {
            setLoading(false); setError(true);
            setMessage(error.message);
        });
    }

    const Handle_changes = () => {
        Is_Loading();

        if (error){
            return (
                <Warning error_message={error_message} /> 
            )
        }

        return (
            <ListSeries series={series} />
        )
    }

    return (
        <View style={style.container}>
            {Handle_changes()}
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    containerLoading:{
        flex:1
    }
})

export default LandingPage;