import React, { Component } from 'react';

import './recipe-item.css';

class RecipeItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFullRecipe: false
    }
  }


  showFullRecipe = (e) => {
    this.setState({
      [e.target.name]: true
    })
  }
  render() {

    const { name } = this.props;
    return (
      <div>
        <div className={"recipe-item__block" + (this.state.showFullRecipe ? 'recipe-item__block_open' : null)}
          name={name}
          onClick={this.showFullRecipe}>
          <p className="recipe-item__name">{name}</p>
        </div>
      </div>
    );
  }
}

export default RecipeItem;
