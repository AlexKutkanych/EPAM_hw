import React, { Component } from 'react';
import TableBody from '../TableBody/TableBody.jsx';
import './table.css';

class Table extends Component {
  render() {
    return (
      <div className="table__block">
        <div className="table">
          <div className="table__heading">
              <div className="table__cell table__cell_heading table__cell_small">&#35;</div>
              <div className="table__cell table__cell_heading">Camper Name</div>
              <div className="table__cell table__cell_heading table__cell_sortable">Points in last 30 days</div>
              <div className="table__cell table__cell_heading table__cell_sortable">Points all time</div>
            </div>
          <TableBody />
        </div>
      </div>
    );
  }
}

export default Table;
