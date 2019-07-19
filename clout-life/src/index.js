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
    industry: 'Education',
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
        case "F_NAME":
            return { ...state, fName: state.fName};
        case "L_NAME":
            return { ...state, fName: state.lName};
        case "INDUSTRY":
            return { ...state, fName: state.lName};
        case "COL":
            return { ...state, fName: state.costOfLiving};
        case "WEATHER":
            return { ...state, fName: state.weather};
        case "P_DENSITY":
            return { ...state, fName: state.weather};
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
