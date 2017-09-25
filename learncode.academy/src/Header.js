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
import SignInForm from './SignInForm';
import NotFound from './NotFound';



export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShown: false
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        const showModal = this.state.isShown == true ? false : true
        this.setState({
          isShown: showModal
        })
    }


    handleChange(e){
        const title = e.target.value;
       this.props.changeTitle(title);
    }

    render(){

        const navBar = ["Scores", "Teams", "Players"];

        const test = {
            backgroundColor: "green"
         };

         const navLinks = navBar.map((page, index) => {
             return (
                 <a href={"/" + page} key={index} className="menu-item">{page}</a>)});

        return (
            <div>
                <nav className="menu">
                    <a href="/"><img className="menu__logo" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?w=100&h=100&transparent=true" alt="logo"/></a>
                    {navLinks}
                    <a href="#" onClick={this.showModal}>Sign In</a>
                    {this.state.isShown ? <SignInForm /> : false}
                </nav>
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
