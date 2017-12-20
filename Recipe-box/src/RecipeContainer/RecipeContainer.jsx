import React, { Component } from 'react';

import Button from '../Button/Button';

import RecipeList from '../RecipeList/RecipeList.jsx';
import ModalBox from '../ModalBox/ModalBox.jsx';
import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
// import ActionDelete from 'material-ui/svg-icons/action/delete';
// import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './recipe-container.css';

class RecipeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      openNewRecipeModal: false,
      newRecipe: {}
    }
  }

  // handleInput = (e) => {
  //     this.setState({
  //       ...this.state,
  //       [e.target.name]: e.target.value,
  //     })
  // }

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
       }
     }))
   }

  render() {

    return (
      <div className="recipe-wrapper">
        <div className="recipe-container">
            <RecipeList newRecipe={this.state.newRecipe}/>
        </div>
        <Button bgColor={'#40C4FF'}
                labelText={'Add Recipe'}
                icon={<ContentAddCircleOutline />}
                click={this.handleOpen}/>
        <ModalBox open={this.state.openNewRecipeModal}
                  close={this.handleClose}
                  addRecipe={this.addNewRecipe} />
      </div>
    );
  }
}

export default RecipeContainer;
