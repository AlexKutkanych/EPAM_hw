import React, { Component } from 'react';
import Header from './Header/Header.jsx';
import RecipeContainer from './RecipeContainer/RecipeContainer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <RecipeContainer />
      </div>
    );
  }
}

export default App;
