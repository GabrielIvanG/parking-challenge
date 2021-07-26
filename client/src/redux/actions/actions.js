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

			// let newArrData = {pages: data.pages, business : newData};

			dispatch({
				type: ActionTypes.GET_BUSINESS,
				payload: newData,
			});
		} catch (error) {
			dispatch({
				type: 'GET_BUSINESS',
				payload: {
					error: 'Not found',
				},
			});
		}
	};
};