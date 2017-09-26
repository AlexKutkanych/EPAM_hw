import React from 'react';
import NewsTempl from './NewsTempl';

export default class News extends React.Component{




    render(){

        let News = [
            {date: "122323", title: "Title1", newsText: "News text News text News textv  News text"},
            {date: "122323", title: "Title2", newsText: "News text News text News textv  News text"},
            {date: "122323", title: "Title3", newsText: "News text News text News textv  News text"},
            {date: "122323", title: "Title4", newsText: "News text News text News textv  News text"}
        ].map((news, i) => <NewsTempl key={i} title={news.title} date={news.date} newsText={news.newsText} /> );

        return(
            <div>
                <h2>News Page</h2>
                {News}

            </div>
        )
    }
}