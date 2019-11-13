import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import './index.css';
import { rootReducer } from "./reducer";
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import {logger} from "redux-logger";
import Thunk from 'redux-thunk';

//1.Create store

const store = createStore(
    rootReducer,
    applyMiddleware(logger,Thunk),
);

//2. connect redux to app (reducer.js importuotas)

//3 Connect redux to app

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();