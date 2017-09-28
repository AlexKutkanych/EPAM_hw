import React from 'react';

export default class Conferences extends React.Component{

    render(){

        const { name, img, alt, onClick } = this.props;

        return(
            <article className="teams-conference" >
                <img src={img} alt={alt}/>
                <h2>{name}</h2>
                <span data-conference={name} onClick={onClick}>Show all teams</span>
            </article>
        )
    }
}