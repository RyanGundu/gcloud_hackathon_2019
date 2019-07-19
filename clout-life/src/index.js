import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const initialState = {
    step: 0,
    fName: '',
    lName: '',
    age: 0,
    industry: 'Oil, Gas and Mining',
    costOfLiving: 0,
    weather: 'NA',
    populationDensity: 'NA'
}

function reducer(state=initialState, action) {
    switch(action.type) {
        case "UP_STEP":
            return { ...state, step: state.step + 1};
        case "DOWN_STEP":
            return { ...state, step: state.step - 1};
        case "RESET_STEP":
            return { ...state, step: 0};
        case "F_NAME":
            return { ...state, fName: action.value};
        case "L_NAME":
            return { ...state, lName: action.value};
        case "AGE":
            return { ...state, age: action.value};
        case "INDUSTRY":
            return { ...state, industry: action.value};
        case "COL":
            return { ...state, costOfLiving: action.value};
        case "WEATHER":
            return { ...state, weather: action.value};
        case "P_DENSITY":
            return { ...state, populationDensity: action.value};
        case "RESET_ALL":
            return initialState;
        default:
            return state;
    }
}

const store = createStore(reducer);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
