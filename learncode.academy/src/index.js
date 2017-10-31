import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from './Header/Header.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const initialState = [
	'Dwyane Wade',
	'LeBron James'
]
function league(state = initialState, action){
	if(action.type === 'ADD_PLAYER'){
		return [
			...state,
			action.payload
		]
	}
	return state;
}

const store = createStore(league, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
          <Header />
   		 </BrowserRouter>
    </Provider>,
        document.getElementById('root')
);
