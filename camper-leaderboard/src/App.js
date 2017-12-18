import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import Table from './Table/Table.jsx';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
