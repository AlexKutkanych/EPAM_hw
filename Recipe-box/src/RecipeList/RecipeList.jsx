import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/RecipeItem.jsx';

// import './RecipeContainer.css';

class RecipeList extends Component {
  render() {

    return (
      <div>
        <RecipeItem name={'Rosted Duck'}/>
        <RecipeItem name={'Varenyky'}/>
        <RecipeItem name={'Borshch'}/>
      </div>
    );
  }
}

export default RecipeList;
