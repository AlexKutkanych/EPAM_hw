import React, { Component } from 'react';

export default class SignInForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            name: "",
            pass: "",
            nameEmpty: true,
            passEmpty: true,
        }
    }

    handleChange = (e) => {
        let target = e.target;

        this.setState({
            [target.name]: target.value,
        });

        e.preventDefault();
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
                       name="pass"
                        required/>
                        <br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}