import {ActionTypes} from '../constants.js'

const initialState = {
	business: []
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.GET_BUSINESS :
			return {
				...state,
				business: payload,
			};
		default:
			return state;
	}
};

export default reducer;