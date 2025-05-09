import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bulma/css/bulma.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import onereducer from './store/one';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux'
const rootEpic = combineEpics(

);
const rootReducer = combineReducers(
  onereducer
)
const epicMiddleWare = createEpicMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(epicMiddleWare)
)
epicMiddleWare.run(rootEpic);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
