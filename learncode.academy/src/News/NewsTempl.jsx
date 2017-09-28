import React from 'react';
import DeleteIcon from './cancel.svg';

export default class NewsTempl extends React.Component{

    deleteNews(id){
        this.props.onDelete(id);
    }
    render(){

        const {title, date, newsText} = this.props.newsItem;



        return(
            <article className="news-article">
                <span>{title}</span>
                <h2>{date}</h2>
                <p>{newsText}</p>
                <img className="delete-icon" src={DeleteIcon} onClick={this.deleteNews.bind(this, this.props.newsItem.id)} alt="delete"/>
            </article>

        )
    }
}