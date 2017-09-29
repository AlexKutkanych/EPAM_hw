import React from 'react';

export default class TeamProfile extends React.Component{

    render(){

        const {name, img, alt, desc} = this.props;


        return(

            <article className="team">
                <img src={img} alt={alt}/>
                <h3>{name}</h3>
                <p>{desc}</p>
            </article>
        )
    }
}