import React, { Component } from 'react';

import './recipe-item.css';

class RecipeItem extends Component {

  render() {


    const { name, recipe, ingredients, show, click} = this.props;
    return (
        <div className={"recipe-item__block " + (show ? "recipe-item__block_open" : null)} onClick={click}>
          <p className="recipe-item__name" data-name={name}>{name}</p>
          <p className="recipe-item__name">{recipe}</p>
          <p className="recipe-item__name">{ingredients}</p>
        </div>
    );
  }
}

export default RecipeItem;
