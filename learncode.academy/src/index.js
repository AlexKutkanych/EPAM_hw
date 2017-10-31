import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from './Header/Header.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function league(state = [], action){
	if(action.type === 'ADD_PLAYER'){
		return [
			...state,
			action.payload
		]
	}
	return state;
}

const store = createStore(league);



ReactDOM.render(
    <BrowserRouter>
        <Provider>
          <Header />
        </Provider>
    </BrowserRouter>,
        document.getElementById('root')
);
