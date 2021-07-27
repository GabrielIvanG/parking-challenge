import {ActionTypes} from '../constants.js'

const initialState = {
	business: [],
	error: [],
	coords: [],
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.GET_BUSINESS :
			return {
				...state,
				business: payload,
			};
		case 'GET_BUSINESS_FAILURE' :
			return {
				...state,
				error: payload,
			};
		case 'CLEAN_ERROR' :
			return {
				...state,
				error: payload
			}
		case 'GET_COORDS' :
			return {
				...state,
				coords: payload
			}
			case 'GET_COORDS_FAIL' :
			return {
				...state,
				error: payload
			}
		default:
			return state;
	}
};

export default reducer;