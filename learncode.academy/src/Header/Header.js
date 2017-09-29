<<<<<<< Updated upstream:learncode.academy/src/Header/Header.js
import React, { Component } from 'react';
import {
    Route,
    Switch,
    Link
} from 'react-router-dom';

import '../App.css';
import '../index.css';
import Teams from '../Teams/Teams';
import MainPage from '../MainPage/MainPage';
import Scores from '../Scores';
import Players from '../Players/Players';
import News from '../News/News';
import SignInForm from '../SignInForm';
import NotFound from '../NotFound';




export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShown: false,
            name: "Will",
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        const showModal = this.state.isShown === true ? false : true;
        this.setState({
          isShown: showModal
        })
    }


    handleChange(e){
        const title = e.target.value;
       this.props.changeTitle(title);
    }

    render(){

        const navBar = ["Scores", "Teams", "Players", "News"];

         const navLinks = navBar.map((page, index) => {
             return (
                 <Link to={"/" + page} key={index} className="menu-item" >{page}</Link>)});


        return (
            <div>
                <nav className="menu">
                    <Link to="/"><img className="menu__logo" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?w=100&h=100&transparent=true" alt="logo"/></Link>
                    {navLinks}

                    <button href="#" onClick={this.showModal}>Sign In</button>
                    {this.state.isShown ? <SignInForm /> : false}

                </nav>
                <Switch>
                    <Route activeClassName="test" exact path='/' component={MainPage}/>
                    <Route activeClassName="test" exact path='/Teams' component={Teams}/>
                    <Route activeClassName="test" exact path='/Scores' component={Scores}/>
                    <Route activeClassName="test" exact path='/Players' component={Players}/>
                    <Route activeClassName="test" exact path='/News' component={News}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        )
    }



}
=======
import React, { Component } from 'react';
import {
    Route,
    Switch,
    NavLink,
    Link
} from 'react-router-dom';

import './App.css';
import './index.css';
import Teams from './Teams';
import MainPage from './MainPage';
import Scores from './Scores';
import Players from './Players';
import News from './News';
import SignInForm from './SignInForm';
import NotFound from './NotFound';




export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShown: false,
            name: "Will"
        }

        this.showModal = this.showModal.bind(this);
    }

    showModal(){
        const showModal = this.state.isShown == true ? false : true;
        this.setState({
          isShown: showModal
        })
    }


    handleChange(e){
        const title = e.target.value;
       this.props.changeTitle(title);
    }

    render(){

        const navBar = ["Scores", "Teams", "Players", "News"];

        const test = {
            backgroundColor: "green"
         };

         const navLinks = navBar.map((page, index) => {
             return (
                 <NavLink activeClassName="test" to={"/" + page} key={index} className="menu-item" >{page}</NavLink>)});


        return (
            <div>
                <nav className="menu">
                    <Link to="/"><img className="menu__logo" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?w=100&h=100&transparent=true" alt="logo"/></Link>
                    {navLinks}

                    <a href="#" onClick={this.showModal}>Sign In</a>
                    {this.state.isShown ? <SignInForm /> : false}

                </nav>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/Teams' component={Teams}/>
                    <Route exact path='/Scores' component={Scores}/>
                    <Route exact path='/Players' component={Players}/>
                    <Route exact path='/News' component={News}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        )
    }



}
>>>>>>> Stashed changes:learncode.academy/src/Header.js
