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
      openEditRecipeModal: false,
      recipiesEmpty: true,
      recipes: [],
      newRecipe: {},
      recipeFieldEmpty: true,
      ingredientsFieldEmpty: true
    }
  }

  componentDidMount(){
    this.getRecipesFromLocalStorage();
  }

  getRecipesFromLocalStorage = () => {
    const myRecipes = localStorage.getItem("myRecipes");
    console.log(typeof myRecipes);
    if(myRecipes && myRecipes !== '[]'){
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

   checkIfNewReceipeFieldsEmpty = (e) => {
    const target = e.target;
    const inputName = e.target.name;
    const r_a = 0.3;
    if (!e.target.value.trim()) {
      target.style.borderColor = "red";
      this.setState({
        ...this.state,
        [`${inputName}FieldEmpty`]: true,
      });
    } else {
      target.style.borderColor = "rgba(169, 169, 169, " + r_a + ")";
      this.setState({
        ...this.state,
        [`${inputName}FieldEmpty`]: false,
      });
    }
  };

   addNewToAllRecipes = (newRec) => {
     this.setState(prevState => ({
       recipes: [
          ...prevState.recipes,
          newRec
       ],
       recipiesEmpty: false,
       recipeFieldEmpty: true,
       ingredientsFieldEmpty: true
     }));

     this.handleClose();

    return this.state.recipes;
   }

   setRecipesToLocalStorage = () => {
     const recipes = this.state.recipes;
     const jsonRecipes = JSON.stringify(recipes);
     localStorage.setItem("myRecipes", jsonRecipes);
     if(recipes.length === 0){
       this.setState({
         ...this.state,
         recipiesEmpty: true
       });
     } else {
       this.setState({
         ...this.state,
         recipiesEmpty: false
       });
     }
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
     const recipeName = e.currentTarget.getAttribute('dataname');
     const recipeBlock = this.getClosest(e.currentTarget, `#${recipeName}`);

     let recipes = this.state.recipes;

     recipes.forEach(item => {
       if(item.recipe === recipeName){
         const index = recipes.indexOf(item);
         this.setState(prevState => ({
           recipes: [
             ...prevState.recipes.filter((rec, i) => i !== index)
           ]
         }))
       }
     })
   }

   editRecipe = (e) => {
      const recipeName = e.currentTarget.getAttribute('datarecipename');
      const target = e.target;

      const recipes = this.state.recipes;

      recipes.forEach(item => {
        if(item.recipe === recipeName){
          const index = recipes.indexOf(item);
          if(target.name === 'recipe'){
            recipes[index].recipe = target.value;
          } else if(target.name === 'ingredients'){
            recipes[index].ingredients = target.value;
          }

          this.setState({
            recipes: recipes
          })
        }
      })
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
                  className='save-button'
                  labelText={'Save to your account'}
                  icon={<ContentSave />}
                  click={this.setRecipesToLocalStorage}/>
        </div>
        <div className="recipe-container">
            <RecipeList recipes={this.state.recipes}
                        newRecipe={this.state.newRecipe}
                        deleteRecipe={this.deleteRecipe}
                        editRecipe={this.editRecipe}/>
            {this.state.recipiesEmpty && <NoRecipies />}
        </div>
        <ModalBox open={this.state.openNewRecipeModal}
                  close={this.handleClose}
                  onBlur={this.checkIfNewReceipeFieldsEmpty}
                  recipeFieldEmpty={this.state.recipeFieldEmpty}
                  ingredientsFieldEmpty={this.state.ingredientsFieldEmpty}
                  submit={() => this.addNewToAllRecipes(this.state.newRecipe)}
                  onChange={this.addNewRecipe}
                  title="Add Recipe" />
      </div>
    );
  }
}

export default RecipeContainer;
