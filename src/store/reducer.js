import { GET_CATALOGUE } from './actions';
import Catalogue from 'assets/catalogue.json';
function app(state = {}, action) {
	switch (action.type) {
		case GET_CATALOGUE:
			return Object.assign({}, state, {
				catalogue: Catalogue,
			});
		default:
			return state;
	}
}
export default app;
