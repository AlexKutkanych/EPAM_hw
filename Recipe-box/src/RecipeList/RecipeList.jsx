import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/RecipeItem.jsx';

class RecipeList extends Component {
  //
  // componentWillReceiveProps(nextProps){
  //   this.renderAllRecipes(nextProps.recipes);
  // }

  showFullRecipe = (e) => {
     this.setState({
       [e.target.dataset.name]: true
      })
      console.log(e.target.dataset.name);
   }

  render() {

    const { recipes, newRecipe } = this.props;


    return (
      <div>
        {recipes.map((item, i) => {
            return (<RecipeItem key={i}
              name={item.name}
              recipe={item.recipe}
              ingredients={item.ingredients} />)
          })
        }
      </div>
    );
  }
}

export default RecipeList;
