import React, { Component } from 'react';

export default class BoilingResult extends Component {


    render(){
        const { temp } = this.props;


        return (
            <div>
                {(temp > 100) ? <p>The water would boil.</p> : <p>The water would not boil.</p>}
            </div>
        )
    }

}