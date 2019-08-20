import { combineReducers } from 'redux';
import * as ACT from './actions';
import Catalogue from 'assets/catalogue.json';
function list(state = {}, action) {
	switch (action.type) {
		case ACT.GET_CATALOGUE:
			return Object.assign({}, state, {
				catalogue: Catalogue.shows,
			});
		case ACT.SET_SEARCH:
			return Object.assign({}, state, {
				activeSearch: action.value,
			});
		default:
			return state;
	}
}
function active(state = {}, action) {
	switch (action.type) {
		case ACT.SET_ACTIVE_TITLE:
			return Object.assign({}, state, {
				details: action.value,
			});
		case ACT.REQUEST_ACTIVE_RATING:
			return Object.assign({}, state, {
				rating: null,
			});
		case ACT.SET_ACTIVE_RATING:
			return Object.assign({}, state, {
				rating: action.value,
			});
		default:
			return state;
	}
}
const app = combineReducers({
	list,
	active,
});
export default app;
