import React from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux'

class Scores extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			player: '',
		}
	};

	addPlayer = (e) => {
		e.preventDefault();
		this.props.onAddPlayer(this.playerInput.value);
		console.log(this.playerInput.value);
		this.playerInput.value = '';
	};

    render() {

    	console.log(this.props.testStore);

        return(
        	<div>
            	<h2 style = {{color: "green"}}>Scores</h2>
            	<input type="text"
            			className="player__input"
						ref={input => {this.playerInput = input}}
            			/>
            	<button className="add-player__btn"
            			onClick={this.addPlayer}>
            	Add player</button>
            	<ul>{this.props.testStore.map((player, i) => 
            		<li key={i}>{player}</li>)}</ul>
            </div>
        )
    }
}

export default connect(
 state => ({
     testStore: state
 }),
 dispatch => ({
 	onAddPlayer: (playerMame) => {
 		dispatch({type: 'ADD_PLAYER', payload: playerMame})
 	}
 })
 )(Scores);
