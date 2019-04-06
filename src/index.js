import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//Mari has all info going through one reducer on way to db

const studentInfo = {
feelings:'',
understanding:'',
supported:'',
comments:'',
}

const reducer1 = (state=studentInfo, action) => {
 console.log(`This is router1 and this is state:`, state);

if (action.type==='HOW_FEELING_TODAY') {
    return {
        ...state,
        feelings: Number(action.payload),
    }
}

else if (action.type === 'UNDERSTANDING') {
    return { 
        ...state, 
        understanding:Number(action.payload),
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



const storeInstance = createStore(
    combineReducers({
        reducer1
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
