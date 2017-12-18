import React, { Component } from 'react';
import axios from 'axios';
import './table.css';

class Table extends Component {

  componentDidMount(){
    axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then(res => {
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="table__block">
        <table className="table">
          <thead>
            <tr>
              <td>&#35;</td>
              <td>Camper Name</td>
              <td>Points in last 30 days</td>
              <td>Points all time</td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Table;
