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

    const { recipes, deleteRecipe, editRecipe, checkEmptyInput } = this.props;


    return (
      <div>
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
               />)
          })
        }
      </div>
    );
  }
}

export default RecipeList;
