import React from 'react';

export default class NewsTempl extends React.Component{

    render(){

        const {title, date, newsText} = this.props.newsItem;



        return(
            <article className="news-article">
                <span>{title}</span>
                <h2>{date}</h2>
                <p>{newsText}</p>
            </article>

        )
    }
}