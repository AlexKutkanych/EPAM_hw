import React, { Component } from 'react';
import BoilingResult from './BoilingResult';
import InputComp from './InputComp';
import './TestPage.css';

const tempScales = {
    c: 'Celcius',
    f: 'Fahrenheit'
}

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            test: 4
        }
    }

    getTemp = (e) => {
        let target = e.target;
        if(!isNaN(+target.value) && +target.value !== ''){
            this.setState({
                temp: Number(target.value)
            })
        } else {
            alert("Enter a number");
        }
        console.log(this.state);
    }

    render() {

        const scale = this.props.scale;
        return (
            <div className={"temp-check " + (scale === 'f' ? "temp-check_style" : '')} >
                <h1>Enter Temperature in {tempScales[scale]}</h1>
                <InputComp value={this.state.temp} getTemp={this.getTemp}/>
                <BoilingResult temp={this.state.temp}/>
            </div>
        )
    }
}