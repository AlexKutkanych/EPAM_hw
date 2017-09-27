import React from 'react';

export default class PlayerProfile extends React.Component{

    render() {
        const {title, position, picture} = this.props;

        return(
           <article className="Player-container">
               <img src={picture} alt=""/>
               <h3>{title}</h3>
               <p>{position}</p>
           </article>
        )
    }
}