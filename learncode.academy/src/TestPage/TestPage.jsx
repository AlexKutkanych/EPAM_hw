import React, { Component } from 'react';
import Calculator from './Calculator';
import DatePickerField from './DatePickerField';




export default class TestPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
        }
    }


    checkTemp = () => {

        if(this.state.temp > 100){
            console.log("<p>The water will boil</p>");
        }
        return <p>The water will not boil</p>;
    }

    onChange = date => this.setState({ date })






    render(){
        return (
            <div>
               <Calculator scale='c'/>
               <Calculator scale='f'/>
                <DatePickerField />
            </div>
        )

    }
}