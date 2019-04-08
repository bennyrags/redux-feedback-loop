import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//keep the state here
const studentInfo = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: '',
}

//named reducer1 right away, forgot to change until i had used it everywhere!
//Per Mari's suggestion, i used this one reducer for all of the action types for the components
const reducer1 = (state = studentInfo, action) => {

    if (action.type === 'HOW_FEELING_TODAY') {
        return {
            ...state,
            feelings: Number(action.payload),
        }
    }

    else if (action.type === 'UNDERSTANDING') {
        return {
            ...state,
            understanding: Number(action.payload),
        }
    }

    else if (action.type === 'SUPPORTED') {
        return {
            ...state,
            supported: Number(action.payload),
        }
    }

    else if (action.type === 'COMMENTS') {
        return {
            ...state,
            comments: action.payload
        }
    }

    else if (action.type === 'RESET')
        return {
            feelings: action.payload.feelings,
            understanding: action.payload.understanding,
            supported: action.payload.supported,
            comments: action.payload.comments,
        }

    return state;
}

//created a separate reducer for the admin page, since it does not interact with studentInfo
const adminReducer = (state = [], action) => {
    if (action.type === 'ADMIN_GET') {
        return action.payload;
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        reducer1,
        adminReducer
    }),
    applyMiddleware(logger),
);

// wrap our react application with our Provider component
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
