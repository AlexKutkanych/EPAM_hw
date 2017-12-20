import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextareaBlock from '../TextareaBlock/TextareaBlock.jsx';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
class ModalBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipeFieldEmpty: true,
      ingredientsFieldEmpty: true
    }
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

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.close}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={this.state.recipeFieldEmpty || this.state.ingredientsFieldEmpty}
        keyboardFocused={true}
        onClick={this.props.submitAdding}
      />,
    ];

    const { open, close, addRecipe } = this.props;

    return (
      <div>
        <form>
          <Dialog
            title="Add Recipe"
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={close}
          >
          <TextareaBlock name="recipe"
                        id="recipe"
                        maxLength={100}
                        rows={1}
                        onChange={addRecipe}
                        onBlur={this.checkIfNewReceipeFieldsEmpty}
                        />
          <TextareaBlock name="ingredients"
                        id="ingredients"
                        maxLength={1000}
                        rows={4}
                        onChange={addRecipe}
                        onBlur={this.checkIfNewReceipeFieldsEmpty}
                        />
          </Dialog>
        </form>
      </div>
    );
  }
}

export default ModalBox;
