import React from 'react';

export default class PlayerProfile extends React.Component{

    render() {
        const {title} = this.props;
        const {position} = this.props;
        const {picture} = this.props;


        return(
           <article className="Player-container">
               <img src={picture} alt=""/>
               <h3>{title}</h3>
               <p>{position}</p>
           </article>
        )
    }
}