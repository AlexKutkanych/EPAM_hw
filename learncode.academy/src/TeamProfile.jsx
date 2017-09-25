import React from 'react';

export default class TeamProfile extends React.Component{




    render(){

        const {name} = this.props;
        const {desc} = this.props;


        return(

            <article>
                {/*<img src="" alt=""/>*/}
                <h3>{name}</h3>
                <p>{desc}</p>
            </article>
        )
    }
}