import fetch from 'cross-fetch';;
export const GET_CATALOGUE = 'GET_CATALOGUE';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_ACTIVE_TITLE = 'SET_ACTIVE_TITLE';
export const REQUEST_ACTIVE_RATING = 'REQUEST_ACTIVE_RATING';

export const SET_ACTIVE_RATING = 'SET_ACTIVE_RATING';
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

export function setActive(value) {
	return {
		type: SET_ACTIVE_TITLE,
		value,
	};
}

export function requestActiveRating() {
	return {
		type: REQUEST_ACTIVE_RATING,
	};
}

export function setActiveRating() {
	return {
		type: SET_ACTIVE_RATING,
	};
}

export function fetchRating(id) {
	return function(dispatch) {
		dispatch(requestActiveRating());
		return fetch(
			`http://www.omdbapi.com/apikey=${process.env.REACT_APP_IMDB_KEY}&i=${id}`
		)
			.then(
				response => response.json(),
				error => console.log('An error occurred.', error)
			)
			.then(json => dispatch(setActiveRating(json)));
	};
}
