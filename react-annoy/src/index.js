import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducerLogin from './store/reducers/reducerLogin';
import createSagaMiddleware from 'redux-saga';
import {handleApp} from './sagas';
import Socket from './sockets'

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    rLogin : reducerLogin
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const webS = Socket(store.dispatch);
sagaMiddleware.run(handleApp, {webS, dispatch : store.dispatch})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
