import React from 'react';


export default class PostItem extends React.Component{


    render(){

        const {userId, body, title} = this.props.post;
        return(
            <article className="news-article">
                <span>{userId}</span>
                <h2>{title}</h2>
                <p>{body}</p>
            </article>

        )
    }
}