import React from 'react';

export default class SignInForm extends React.Component{

    render() {
        return(
            <form>
                <input type="text"/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}