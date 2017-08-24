import _ from 'lodash';
import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            let index = _.findIndex(state, cityData => cityData.city.id === action.payload.data.city.id);
            
            if (index == -1) {
                return [action.payload.data, ...state];
            }
            else {
                return state;
            }
        default:
            return state;
    }
}