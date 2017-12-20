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
       console.log(this.state);
       const jsonRecipes = JSON.stringify(this.state.recipes);
       localStorage.setItem("myRecipes", jsonRecipes);
     }

  render() {

    return (
      <div className="recipe-wrapper">
        <Button bgColor={'#40C4FF'}
                labelText={'Add Recipe'}
                icon={<ContentAddCircleOutline />}
                click={this.handleOpen}/>
        <Button bgColor={'#4CAF50'}
                labelText={'Save to your account'}
                icon={<ContentAddCircleOutline />}
                click={this.setRecipesToLocalStorage}/>
        <div className="recipe-container">
            <RecipeList recipes={this.state.recipes} newRecipe={this.state.newRecipe}/>
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
