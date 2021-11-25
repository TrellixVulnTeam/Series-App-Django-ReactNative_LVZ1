import APIServices from '../../APIServices/APIServices';
import { initialStateValue } from '../../pages/LandingPage';
import store from '../../store/store';
import { setSeries } from '../../store/serieslice';

export function UpdateSeries(){

    const token = store.getState().login_reducer.token;

    return APIServices.ListSeries_page(token, 0, initialStateValue)
    .then(response => {
        store.dispatch(setSeries({type:'set',payload:response.data}));
    })
    .catch(error => {error});
}