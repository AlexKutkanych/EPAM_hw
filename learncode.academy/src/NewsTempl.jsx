import React from 'react';

export default class NewsTempl extends React.Component{

    render(){

        const {date} = this.props;
        const {title} = this.props;
        const {newsText} = this.props;

        return(
            <article>
                <span>{date}</span>
                <h2>{title}</h2>
                <p>{newsText}</p>
            </article>
        )
    }
}