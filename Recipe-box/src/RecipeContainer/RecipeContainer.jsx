import React, { Component } from 'react';

import Button from '../Button/Button';

import ContentAddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import './RecipeContainer.css';

class RecipeContainer extends Component {
  render() {

    return (
      <div>
        <Button bgColor={'#40C4FF'}
                labelText={'Add Recipe'}
                icon={<ContentAddCircleOutline />}/>
        <Button bgColor={'#EF5350'}
                labelText={'Delete'}
                icon={<ActionDelete />}/>
        <Button labelText={'Edit'}
                labelColor={'#000'}
                icon={<EditorModeEdit />}/>
      </div>
    );
  }
}

export default RecipeContainer;
