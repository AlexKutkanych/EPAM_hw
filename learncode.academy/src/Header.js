import React, { Component } from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import './App.css';
import './index.css';
import Teams from './Teams';
import MainPage from './MainPage';
import Scores from './Scores';
import Players from './Players';
import NotFound from './NotFound';



export default class Header extends Component{

    handleChange(e){
        const title = e.target.value;
       this.props.changeTitle(title);
    }



    render(){

        const test = {
            backgroundColor: "green"

         }
        return (


            <div>
                <ul className="menu">
                    <a href="/" className="menu-item">Home</a>
                    <a href="/Scores" className="menu-item" >Scores</a>
                    <a href="/Teams" className="menu-item">Teams</a>
                    <a href="/Players" className="menu-item">Players</a>
                </ul>
            <Switch>
                <Route activeClassName="test" exact path='/' component={MainPage}/>
                <Route activeClassName="test" exact path='/Teams' component={Teams}/>
                <Route activeClassName="test" path='/Scores' component={Scores}/>
                <Route activeClassName="test" path='/Players' component={Players}/>
                <Route component={NotFound}/>
            </Switch>

            </div>

        )

    }
}
