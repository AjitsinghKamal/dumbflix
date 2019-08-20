import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import './assets/styles/index.css';

import App from './layouts/app';

import state from 'store/reducer';
import { getCatalogue } from 'store/actions';

import * as serviceWorker from './serviceWorker';

const store = createStore(state, applyMiddleware(thunkMiddleware));
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

store.dispatch(getCatalogue());

serviceWorker.unregister();
