import React, { Component } from 'react';

import Button from '../Button/Button';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import './recipe-item.css';

class RecipeItem extends Component {

  test = (e) => {
    console.log(e.target);
  }

  render() {

    const { recipe, ingredients, toggleRecipeState, click, deleteRecipe } = this.props;

    return (
        <div className={"recipe-item__block " + (toggleRecipeState ? "recipe-item__block_open" : null)}
             id={recipe}
             data-name={recipe}
             title="Click to see full recipe"
          >
          <p className="recipe-item__name"
             data-name={recipe}
             onClick={click}>{recipe}</p>
          <div className="recipe-item__ingredients">
              <h3 className="ingredients__title">ingredients</h3>
              <ul className="ingredients-list">
                {ingredients.split(",").map((item, i) => <li className="ingredients-list__item" key={i}>{item}</li>)}
              </ul>
              <div className="ingredients__buttons-wrapper">
                <Button bgColor={'#FF5722'}
                        labelText={'Delete'}
                        icon={<ActionDelete />}
                        name={recipe}
                        click={deleteRecipe}/>
                <Button bgColor={'#5E35B1'}
                        labelText={'Edit'}
                        icon={<EditorModeEdit />}
                        name={recipe}/>
              </div>
          </div>
        </div>
    );
  }
}

export default RecipeItem;
