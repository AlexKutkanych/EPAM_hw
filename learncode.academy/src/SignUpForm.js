import React, { Component } from 'react';
import $ from 'jquery';

export default class SignUpForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            data: {
                name: "",
                pass: "",
                email: "",
            },
            nameEmpty: true,
            passEmpty: true,
        }
    }

    onSubmit = (e) => {
        const errors = this.validate(this.state.data);
    }

    handleChange = (e) => {
        let target = e.target;

        this.setState({
            data: {...this.state.data, [target.name]: target.value},
        });
        console.log(this.state.data);

        e.preventDefault();
    }



    render() {
        return(
            <div className="form-block card-panel teal lighten-5">
                <form className="signin-block"
                      onChange={this.handleChange}
                      onSubmit={this.onSubmit}>
                    <label htmlFor="name-input">Name</label>
                    <input type="text"
                           id="name-input"
                           name="name"
                           className="validate"
                           required/>
                    <label htmlFor="email-input">Email</label>
                    <input type="email"
                           id="email-input"
                           name="email"
                           className="validate"
                           required/>
                    <label htmlFor="pass-input">Password</label>
                    <input type="password"
                           id="pass-input"
                           name="pass"
                           className="validate"
                            required/>
                            <br/>
                    <input type="submit" value="Submit" className="waves-effect waves-light btn"/>
                </form>
            </div>
        )
    }
}