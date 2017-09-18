import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from './Header';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>,
        document.getElementById('root'));
registerServiceWorker();
