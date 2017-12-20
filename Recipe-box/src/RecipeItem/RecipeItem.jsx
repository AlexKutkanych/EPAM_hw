import React, { Component } from 'react';

import './recipe-item.css';

class RecipeItem extends Component {

  render() {


    const { name, recipe, ingredients, toggleRecipeState, click} = this.props;
    return (
        <div className={"recipe-item__block " + (toggleRecipeState ? "recipe-item__block_open" : null)}
          data-name={name} onClick={click} title="Click to see full recipe"
          >
          <p className="recipe-item__name" data-name={name}>{name}</p>
          <p className="recipe-item__name">{ingredients}</p>
        </div>
    );
  }
}

export default RecipeItem;
