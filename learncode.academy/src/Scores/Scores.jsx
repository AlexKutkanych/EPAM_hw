import React from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux'

class Scores extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			player: '',
		}
	}

	handleInput = (e) => {
		e.preventDefault();
		this.setState({
			player: e.target.value
		})
		console.log(this.state.player);
	}



    render() {

    	console.log(this.props.testStore);


	// store.subscribe(() => {
	// 	console.log(store.getState());
	// })

	// store.dispatch({type: 'ADD_PLAYER', payload: 'Adi Dasler'});
	// store.dispatch({type: 'ADD_PLAYER', payload: 'Rudi Gay'});

        return(
        	<div>
            	<h2 style = {{color: "green"}}>Scores</h2>
            	<input type="text"
            			className="player__input"
						onBlur={this.handleInput}
            			/>
            	<button className="add-player__btn">
            	Add player</button>
            	<ul></ul>
            </div>
        )
    }
}

// export default connect(
// 	state => ({
// 		testStore: state
// 	}),
// 	dispatch => ({})
// 	)(Scores);

export default Scores;
