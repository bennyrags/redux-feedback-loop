import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer1 = (state=[], action) => {
 console.log(`This is router1 and this is state:`, state);
return state;
}

const storeInstance = createStore(
    combineReducers({
        reducer1
    })
);

// wrap our react application with our Provider component
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
