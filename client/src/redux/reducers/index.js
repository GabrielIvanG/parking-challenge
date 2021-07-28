import {ActionTypes} from '../constants.js'

const initialState = {
	business: [],
	error: [],
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.GET_BUSINESS :
			return {
				...state,
				business: payload,
			};
		case ActionTypes.GET_BUSINESS_FAILURE :
			return {
				...state,
				error: payload,
			};
		case ActionTypes.CLEAN_ERROR :
			return {
				...state,
				error: payload
			}
		default:
			return state;
	}
};

export default reducer;