export const GET_CATALOGUE = 'GET_CATALOGUE';
export const SET_SEARCH = 'SET_SEARCH';
export function getCatalogue() {
	return {
		type: GET_CATALOGUE,
	};
}

export function setSearch(value) {
	return {
		type: SET_SEARCH,
		value,
	};
}
