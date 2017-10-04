import React, { Component } from 'react';


export default class InputComp extends Component {


    render() {

        const { scale, getTemp, temp} = this.props;
        return (
            <form>
                <input type="text" className={temp} onChange={getTemp}/>
            </form>
        )
    }
}