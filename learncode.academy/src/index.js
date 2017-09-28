import React from 'react';
import ReactDOM from 'react-dom';
import {} from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Header from './Header/Header';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Header />
    </BrowserRouter>,
        document.getElementById('root'));
registerServiceWorker();
