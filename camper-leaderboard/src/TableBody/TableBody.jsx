import React, { Component } from 'react';
import axios from 'axios';
import TableRow from '../TableRow/TableRow.jsx';
import { topCampersLast30Days } from '../constants/backend-url.js';
// import './table-body.css';

class TableBody extends Component {
    constructor(props){
      super(props);
      this.state = {
        users: []
      }
    }

  componentDidMount(){
    this.getTopCampersLast30days(topCampersLast30Days);
  }

  getTopCampersLast30days = (url) => {
    axios.get(url)
    .then(res => {
      console.log(res.data);
      this.setState({
        users: res.data
      })
    });
  }

  render() {
    const users = this.state.users;
    const renderUsers = users.map((user, i) => {
      return <TableRow key={user.username}
                      number={i}
                      username={user.username}
                      userphoto={user.img}
                      pointsLast30Days={user.recent}
                      pointsAllTime={user.alltime} />
    })
    return (

      <div>
        {renderUsers}
      </div>
    );
  }
}

export default TableBody;
