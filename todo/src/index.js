import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';


const initialState = {
    todos: [
        { value: 'Make Dinner', completed: false },
        { value: 'Clean Kitchen', completed: false }
    ]
};

function reducer(state = initialState) {
    console.log(state);
    return state;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
