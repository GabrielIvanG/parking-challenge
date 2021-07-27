import axios from 'axios';
import {ActionTypes} from '../constants.js'


export const getBusiness = (
	location,
	score
) => {
	return async (dispatch) => {
		try {
			const {data} = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}parkings?location=${location}&score=${score}`
			);

			let newData = data.response.parkings

			dispatch({
				type: ActionTypes.GET_BUSINESS,
				payload: newData,
			});
		} catch (error) {
			dispatch({
				type: 'GET_BUSINESS_FAILURE',
				payload: {
					message: 'Not found',
				},
			});
		}
	};
};

export const cleanError = () => {
	return (dispatch) => {
		try {
			dispatch({
				type: 'CLEAN_ERROR',
				payload: '',
			});
		} catch (error) {
			dispatch({
				type: 'CLEAN_ERROR_FAIL',
				payload: {
					message: 'cant clean',
				},
			});
		}
	};
};

export const getCoords = ( address ) => {
	return async (dispatch) => {
		try {
			const cleanAddress = encodeURI(address[0])
			const {data} = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}geolocation?address=${cleanAddress}`
			);

			let coords = data.response

			dispatch({
				type: 'GET_COORDS',
				payload: coords,
			});
		} catch (error) {
			dispatch({
				type: 'GET_COORDS_FAIL',
				payload: {
					message: 'cannot get coords',
				},
			});
		}
	};
};