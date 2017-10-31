import React, { Component } from 'react';
import {
    Route,
    Switch,
    NavLink,
    Link
} from 'react-router-dom';

import '../App.css';
import '../index.css';
import Teams from '../Teams/Teams';
import MainPage from '../MainPage/MainPage';
import Scores from '../Scores/Scores';
import Players from '../Players/Players';
import News from '../News/News';
import TestPage from '../TestPage/TestPage';
import SignInForm from '../SignInForm';
import SignUpForm from '../SignUpForm';
import NotFound from '../NotFound';




export default class Header extends Component{
    constructor(props){
        super(props);

        this.state = {
            isShownSignUp: false,
            isShownSignIn: false,
            name: "Will",
        }
    }

    showSignIn = () => {
        const showModal = this.state.isShownSignIn === true ? false : true;
        this.setState({
            isShownSignIn: showModal
        })
    }

    showSignUp = () => {
        const showModal = this.state.isShownSignUp === true ? false : true;
        this.setState({
            isShownSignUp: showModal
        })
    }

    handleChange(e){
        const title = e.target.value;
       this.props.changeTitle(title);
    }

    render(){
      const navBar = ["Scores", "Teams", "Players", "News", "TestPage"];
      const navLinks = navBar.map((page, i) => (<Link to={"/" + page} key={i} className="menu-item">{page}</Link>));

        return (
            <div>
                <nav className="menu">
                    <Link to="/" ><img className="menu__logo" src="http://a.espncdn.com/combiner/i?img=/i/teamlogos/leagues/500/nba.png?w=100&h=100&transparent=true" alt="logo"/></Link>
                    {navLinks}
                    <button href="#" onClick={this.showModal}>Sign In</button>
                    {this.state.isShown ? <SignInForm /> : false}
                    <button className="waves-effect red darken-2 btn" href="#" onClick={this.showSignIn}>Sign In</button>
                    {this.state.isShownSignIn ? <SignInForm /> : false}
                    <button className="waves-effect red darken-2 btn" href="#" onClick={this.showSignUp}>Sign Up</button>
                    {this.state.isShownSignUp ? <SignUpForm /> : false}
                </nav>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/Teams' component={Teams}/>
                    <Route exact path='/Scores' component={Scores}/>
                    <Route exact path='/Players' component={Players}/>
                    <Route exact path='/News' component={News}/>
                    <Route exact path='/TestPage' component={TestPage}/>
                    <Route component={NotFound}/>
                </Switch>
              </div>
        )
    }
}
