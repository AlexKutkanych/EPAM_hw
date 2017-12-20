import React, { Component } from 'react';

import RecipeItem from '../RecipeItem/RecipeItem.jsx';

class RecipeList extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

showFullRecipe = (e) => {
   this.setState({
     [e.target.dataset.name]: true
    })
    console.log(e.target.dataset.name);
 }


  render() {

    const Receipes = [
      {name: "Borshch", recipe: "Borshch", ingredients: "blalblabla"},
      {name: "asd", recipe: "asd", ingredients: "blalblabla"},
      {name: "dgfhfgh", recipe: "dgfhfgh", ingredients: "blalblabla"},
      {name: "ertertert", recipe: "ertertert", ingredients: "blalblabla"}
    ];

    const allReceipes = Receipes.map((item, i) => {
      return (<RecipeItem key={i}
        name={item.name}
        recipe={item.recipe}
        ingredients={item.ingredients} />)
    });

    const { newRecipe } = this.props;

    return (
      <div>
        {allReceipes}
        <RecipeItem name={newRecipe.recipe} recipe={newRecipe.recipe}
          ingredients={newRecipe.ingredients}/>
      </div>
    );
  }
}

export default RecipeList;
