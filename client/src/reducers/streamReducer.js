import * as actionTypes from '../actions/types';
import _ from 'lodash';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.FETCH_STREAMS:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case actionTypes.FETCH_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case actionTypes.CREATE_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case actionTypes.EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case actionTypes.DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
