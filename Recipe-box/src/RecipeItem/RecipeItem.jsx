import React, { Component } from 'react';
import Button from '../Button/Button';

import './recipe-item.css';

class RecipeItem extends Component {

  render() {

    const { name, recipe, ingredients, toggleRecipeState, click} = this.props;

    return (
        <div className={"recipe-item__block " + (toggleRecipeState ? "recipe-item__block_open" : null)}
          data-name={name} onClick={click} title="Click to see full recipe"
          >
          <p className="recipe-item__name" data-name={name}>{name}</p>
          <div className="recipe-item__ingredients">
              <h3 className="ingredients__title">ingredients</h3>
              <ul className="ingredients__list">
                {ingredients.split(",").map((item, i) => <li className="ingredients-list__item" key={i}>{item}</li>)}
              </ul>
              <div className="ingredients__buttons-wrapper">
                <Button bgColor={'#FF5722'}
                        labelText={'Delete'}
                        click={this.handleOpen}/>
                <Button bgColor={'#5E35B1'}
                        labelText={'Edit'}
                        click={this.handleOpen}/>
              </div>
          </div>
        </div>
    );
  }
}

export default RecipeItem;
