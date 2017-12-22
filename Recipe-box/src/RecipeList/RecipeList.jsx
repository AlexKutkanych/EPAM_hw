import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/RecipeItem.jsx';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  toggleFullRecipe = (e) => {
    const name = e.target.dataset.name;
     this.setState({
       [name]: !this.state[name]
      })
   }

  render() {

    const { recipes, deleteRecipe, editRecipe, checkEmptyInput, recipeFieldEmpty, ingredientsFieldEmpty } = this.props;


    return (
      <React.Fragment>
        {recipes.map((item, i) => {
            return (
              <RecipeItem key={i}
                          recipe={item.recipe}
                          toggleRecipeState={this.state[item.recipe]}
                          ingredients={item.ingredients}
                          click={this.toggleFullRecipe}
                          deleteRecipe={deleteRecipe}
                          editRecipe={editRecipe}
                          checkEmptyInput={checkEmptyInput}
                          recipeFieldEmpty={recipeFieldEmpty}
                          ingredientsFieldEmpty={ingredientsFieldEmpty}
               />)
          })
        }
      </React.Fragment>
    );
  }
}

export default RecipeList;
