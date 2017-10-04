import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export default class DatePickerField extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            currentDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            currentDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.currentDate}
            onChange={this.handleChange}
        />;
    }
}