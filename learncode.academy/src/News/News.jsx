import React from 'react';
import NewsBlock from './NewsBlock';
import AddNews from './AddNews';

export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        }

    }

    componentWillMount(){
        this.setState({
            news: [
                {date: "2017/12/5", title: "Title1", newsText: "News text News text News textv  News text"},
                {date: "122323", title: "Title2", newsText: "News text News text News textv  News text"},
                {date: "122323", title: "Title3", newsText: "News text News text News textv  News text"},
                {date: "122323", title: "Title4", newsText: "News text News text News textv  News text"}
            ]
        });
            }

    handleAddNews(news){
        let allNews = this.state.news;
        allNews.push(news);
        this.setState({
            news: allNews
        })
        console.log(this.state.news);
    }





    render(){
        return(
            <div>
                <AddNews addNews={this.handleAddNews.bind(this)}/>
                <NewsBlock news={this.state.news}/>


            </div>
        )

    }
}