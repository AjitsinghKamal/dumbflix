import { GET_CATALOGUE, SET_SEARCH } from './actions';
import Catalogue from 'assets/catalogue.json';
function app(state = {}, action) {
	switch (action.type) {
		case GET_CATALOGUE:
			return Object.assign({}, state, {
				catalogue: Catalogue.shows,
			});
		case SET_SEARCH:
			return Object.assign({}, state, {
				activeSearch: action.value,
			});
		default:
			return state;
	}
}
export default app;
