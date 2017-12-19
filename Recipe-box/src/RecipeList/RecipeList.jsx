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
      {name: "Borshch", recipe: "Add blalblabla", ingredients: "blalblabla"},
      {name: "asd", recipe: "Add blalblabla", ingredients: "blalblabla"},
      {name: "dgfhfgh", recipe: "Add blalblabla", ingredients: "blalblabla"},
      {name: "ertertert", recipe: "Add blalblabla", ingredients: "blalblabla"}
    ];

    var allReceipes = Receipes.map((item, i) => <RecipeItem key={i} name={item.name} recipe={item.recipe} ingredients={item.ingredients} />)
    return (
      <div>
        {allReceipes}
      </div>
    );
  }
}

export default RecipeList;
