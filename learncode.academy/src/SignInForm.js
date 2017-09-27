import React from 'react';

export default class SignInForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            pass: ""
        }

    }

    handleChange = (e) => {
        let target = e.target;

        this.setState({
            [target.name]: target.value,
        });

        e.preventDefault();

        console.log(this.state);
    }

    render() {
        return(
            <form className="signin-block"
                  onChange={this.handleChange}>
                <label htmlFor="name-input">Name</label>
                <input type="text"
                       id="name-input"
                       name="name" required/>
                <label htmlFor="pass-input">Password</label>
                <input type="password"
                       id="pass-input"
                       name="pass" required/><br/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}