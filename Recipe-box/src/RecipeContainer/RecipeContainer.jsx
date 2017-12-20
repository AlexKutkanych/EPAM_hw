import React, { Component } from 'react';

import Button from '../Button/Button';

import RecipeList from '../RecipeList/RecipeList.jsx';
import ModalBox from '../ModalBox/ModalBox.jsx';
import NoRecipies from './NoRecipies/NoRecipies.jsx';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
// import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
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

  // setRecipesToLocalStorage = () => {
  //   const Recipes = [
  //     {name: "Borshch", recipe: "Borshch", ingredients: "blalblabla"},
  //     {name: "asd", recipe: "asd", ingredients: "blalblabla"},
  //     {name: "dgfhfgh", recipe: "dgfhfgh", ingredients: "blalblabla"},
  //     {name: "ertertert", recipe: "ertertert", ingredients: "blalblabla"}
  //   ];
  //
  //   const jsonRecipes = JSON.stringify(Recipes);
  //
  //   localStorage.setItem("myRecipes", jsonRecipes);
  //   console.log(jsonRecipes);
  // }

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
     return this.state;
   }



  render() {

    return (
      <div className="recipe-wrapper">
        <div className="recipe-container">
            <RecipeList recipes={this.state.recipes} newRecipe={this.state.newRecipe}/>
            {this.state.recipiesEmpty && <NoRecipies />}
        </div>
        <button onClick={this.test}>Click</button>
        <Button bgColor={'#40C4FF'}
                labelText={'Add Recipe'}
                icon={<ContentAddCircleOutline />}
                click={this.handleOpen}/>
        <ModalBox open={this.state.openNewRecipeModal}
                  submitAdding={() => this.addNewToAllRecipes(this.state.newRecipe)}
                  addRecipe={this.addNewRecipe} />
      </div>
    );
  }
}

export default RecipeContainer;
