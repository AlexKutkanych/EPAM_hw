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
    }
  }

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
        keyboardFocused={true}
        onClick={this.props.close}
      />,
    ];

    const { open, close, addRecipe } = this.props;

    return (
      <div>
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
                      onChange={addRecipe}/>
        <TextareaBlock name="ingredients"
                      id="ingredients"
                      maxLength={1000}
                      rows={4}
                      onChange={addRecipe}/>
        </Dialog>
      </div>
    );
  }
}

export default ModalBox;
