import React from 'react';

export default class PlayerProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            likes: 0
        }



        this.addLikes = this.addLikes.bind(this);
    }

    addLikes = (e) => {
        e.preventDefault();
        this.setState({
            likes: this.state.likes + 1
        })
        console.log(this.state.likes);
    }

    render() {
        const {title, position, picture} = this.props;

        return(
           <article className="Player-container" onClick={this.addLikes}>
               <img src={picture} alt=""/>
               <h3>{title}</h3>
               <p>{position}</p>
               <span className="Player-container__show-likes">&nbsp;{this.state.likes}</span>
           </article>
        )
    }
}