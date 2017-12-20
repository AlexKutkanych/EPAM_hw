import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/RecipeItem.jsx';

class RecipeList extends Component {

  showFullRecipe = (e) => {
     this.setState({
       [e.target.dataset.name]: true
      })
      console.log(e.target.dataset.name);
   }


  render() {

    const { recipes, newRecipe } = this.props;

    const allReceipes = recipes.map((item, i) => {
      return (<RecipeItem key={i}
        name={item.name}
        recipe={item.recipe}
        ingredients={item.ingredients} />)
    });

    return (
      <div>
        {allReceipes}
      </div>
    );
  }
}

export default RecipeList;
