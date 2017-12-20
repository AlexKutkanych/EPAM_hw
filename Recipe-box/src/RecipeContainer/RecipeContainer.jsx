import React, { Component } from 'react';

import RecipeList from '../RecipeList/RecipeList.jsx';
import ModalBox from '../ModalBox/ModalBox.jsx';
import NoRecipies from './NoRecipies/NoRecipies.jsx';

import Button from '../Button/Button';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ContentSave from 'material-ui/svg-icons/content/save';

import './recipe-container.css';

class RecipeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      openNewRecipeModal: false,
      recipiesEmpty: true,
      recipes: [],
      newRecipe: {}
    }
  }

  componentDidMount(){
    this.getRecipesFromLocalStorage();
  }

  getRecipesFromLocalStorage = () => {
    const myRecipes = localStorage.getItem("myRecipes");
    if(myRecipes){
      const recipes = JSON.parse(myRecipes);
      this.setState({
        ...this.state,
        recipes: recipes,
        recipiesEmpty: false
      });
    } else {
      this.setState({
        ...this.state,
        recipiesEmpty: true
      });
    }
  }

  handleOpen = () => {
    this.setState({openNewRecipeModal: true});
  };

  handleClose = () => {
    this.setState({openNewRecipeModal: false});
  };

   addNewRecipe = (e) => {
     const target = e.target;
     this.setState(prevState => ({
       newRecipe: {
         ...prevState.newRecipe,
         [target.name]: target.value
       },
     }))
   }

   addNewToAllRecipes = (newRec) => {
     this.setState(prevState => ({
       recipes: [
          ...prevState.recipes,
          newRec
       ],
       recipiesEmpty: false
     }));

     this.handleClose();

    return this.state.recipes;
   }

   setRecipesToLocalStorage = () => {
     const jsonRecipes = JSON.stringify(this.state.recipes);
     localStorage.setItem("myRecipes", jsonRecipes);
   }

//delete parent element of elem that contains selector
//instead of using  'e.target.parentNode.parentNode.parentNode...';

getClosest = (elem, selector) => {
    for ( ; elem && elem !== document; elem = elem.parentNode ) {
        if ( elem.matches( selector ) ) return elem;
    }
    return null;
};

   deleteRecipe = (e) => {
     var recipeBlock = this.getClosest(e.target, `#${e.target.dataset.name}`);
     recipeBlock.remove();
   }

  render() {

    return (
      <div className="recipe-wrapper">
        <div className="recipe-buttons__wrapper">
          <Button bgColor={'#40C4FF'}
                  labelText={'Add Recipe'}
                  icon={<ContentAddCircleOutline />}
                  click={this.handleOpen}/>
          <Button bgColor={'#4CAF50'}
                  labelText={'Save to your account'}
                  icon={<ContentSave />}
                  click={this.setRecipesToLocalStorage}/>
        </div>
        <div className="recipe-container">
            <RecipeList recipes={this.state.recipes}
                        newRecipe={this.state.newRecipe}
                        deleteRecipe={this.deleteRecipe}/>
            {this.state.recipiesEmpty && <NoRecipies />}
        </div>
        <ModalBox open={this.state.openNewRecipeModal}
                  close={this.handleClose}
                  submitAdding={() => this.addNewToAllRecipes(this.state.newRecipe)}
                  addRecipe={this.addNewRecipe} />
      </div>
    );
  }
}

export default RecipeContainer;
