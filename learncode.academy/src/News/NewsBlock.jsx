import React from 'react';
import NewsTempl from './NewsTempl';
import './index.css';


export default class NewsBlock extends React.Component{

    deleteNews(id){
        this.props.onDelete(id);
    }

    render(){
        let allNews;
        allNews = this.props.news.map((newsItem, i) => <NewsTempl onDelete={this.deleteNews.bind(this)} key={i} newsItem={newsItem}/>);

        return(
            <div className="news-block">
                {allNews}

            </div>
        )
    }
}