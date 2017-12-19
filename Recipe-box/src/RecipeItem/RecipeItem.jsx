import React, { Component } from 'react';

import './recipe-item.css';

class RecipeItem extends Component {

  render() {


    const { name, recipe, ingredients, click, show } = this.props;
    return (
      <div>
        <div className={"recipe-item__block " + (show ? "recipe-item__block_open" : null)}>
          <p className="recipe-item__name" data-name={name} onClick={click}>{name}</p>
          <p className="recipe-item__name" data-name={name} onClick={click}>{recipe}</p>
          <p className="recipe-item__name" data-name={name} onClick={click}>{ingredients}</p>
        </div>
      </div>
    );
  }
}

export default RecipeItem;
