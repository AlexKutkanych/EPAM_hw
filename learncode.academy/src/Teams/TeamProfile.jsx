import React from 'react';

export default class TeamProfile extends React.Component{

    render(){

        const {name} = this.props;
        const {img} = this.props;
        const {alt} = this.props;
        const {desc} = this.props;


        return(

            <article className="team">
                <img src={img} alt={alt}/>
                <h3>{name}</h3>
                <p>{desc}</p>
            </article>
        )
    }
}