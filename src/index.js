import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/styles/index.css';
import App from './layouts/app';
import state from 'store/reducer';
import { getCatalogue } from 'store/actions';

import * as serviceWorker from './serviceWorker';

const store = createStore(state);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(getCatalogue());
console.log(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
