import React, { Component } from 'react';
import Header from './Header';

export default class Layout extends Component{

    render(){
        return (
            <div>
                <Header />
                <h1>KillersNews.com</h1>
            </div>
        )
    }
}