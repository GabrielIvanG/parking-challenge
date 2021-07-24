import {ActionTypes} from '../constants';

const initialState = {
	business: []
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.GET_BUSINESS:
			return {
				...state,
				products: payload,
			};
		default:
			return state;
	}
};

export default reducer;