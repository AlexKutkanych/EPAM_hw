import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextareaBlock from '../TextareaBlock/TextareaBlock.jsx';

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
        disabled={this.props.recipeFieldEmpty || this.props.ingredientsFieldEmpty}
        keyboardFocused={true}
        onClick={this.props.submit}
      />,
    ];

    const { title, recipe, ingredients, open, close, submit, recipeFieldEmpty, ingredientsFieldEmpty,
            onBlur, onChange } = this.props;

    return (
      <React.Fragment>
        <form>
          <Dialog
            title={title}
            actions={actions}
            modal={false}
            open={open}
            onRequestClose={close}
          >
          <TextareaBlock name="recipe"
                        id="recipe"
                        value={recipe}
                        datarecipename={recipe}
                        maxLength={100}
                        rows={1}
                        onChange={onChange}
                        onBlur={onBlur}
                        />
          <TextareaBlock name="ingredients"
                        id="ingredients"
                        value={ingredients}
                        datarecipename={recipe}
                        maxLength={1000}
                        rows={4}
                        onChange={onChange}
                        onBlur={onBlur}
                        />
          </Dialog>
        </form>
      </React.Fragment>
    );
  }
}

export default ModalBox;
