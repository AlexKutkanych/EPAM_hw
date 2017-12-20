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

    const { recipes } = this.props;


    return (
      <div>
        {recipes.map((item, i) => {
            return (<RecipeItem key={i}
              name={item.recipe}
              recipe={item.recipe}
              toggleRecipeState={this.state[item.recipe]}
              ingredients={item.ingredients}
              click={this.toggleFullRecipe} />)
          })
        }
      </div>
    );
  }
}

export default RecipeList;
