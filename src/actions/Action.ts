import { okrUrl, API_STATUS, PUBLISH_CATEGORIES } from '../utils/constants';
import { fetchData } from './ApiCaller';
import { Dispatch } from 'redux';
import transformData from '../utils/utils';

export default function fetchOKR() {
    return (dispatch: Dispatch) => {
        fetchData(okrUrl).then(response => {
            const utilData = transformData(response.data);
            dispatch({ type: API_STATUS.SUCCESS, payload: utilData.transformedData });
            dispatch({ type: PUBLISH_CATEGORIES.OKR_CATEGORIES, payload: utilData.categories });
        }
        ).catch(error =>
            dispatch({ type: API_STATUS.FAILURE, payload: error }));
    }
}