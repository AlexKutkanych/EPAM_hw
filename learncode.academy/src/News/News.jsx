import React from 'react';
import uuid from 'uuid';
import NewsBlock from './NewsBlock';
import AddNews from './AddNews';
import Posts from './Posts';
import axios from 'axios';
// import PostItem from './PostItem';


export default class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            posts: []
        }

    }
    getNews(){
        this.setState({
            news: [
                {
                    id: uuid.v4(),
                    date: "2017/12/5",
                    title: "Title1",
                    newsText: "News text News text News textv  News text"},
                {
                    id: uuid.v4(),
                    date: "122323",
                    title: "Title2",
                    newsText: "News text News text News textv  News text"},
                {
                    id: uuid.v4(),
                    date: "122323",
                    title: "Title3",
                    newsText: "News text News text News textv  News text"},
                {
                    id: uuid.v4(),
                    date: "122323",
                    title: "Title4",
                    newsText: "News text News text News textv  News text"}
            ]
        });
    }

    getPosts(){
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
            this.setState({
              posts: response.data
            }))
        .catch(response => console.log(response))

        // $.ajax({
        //     url: ,
        //     method: 'GET'
        // }).then((data) => {
        //     this.setState({posts: data}, function(){
        //     })
        // })
    }



    componentWillMount(){
       this.getNews();
       this.getPosts();
    }

    componentDidMount(){
        this.getPosts();
    }

    handleAddNews(news){
        let allNews = this.state.news;
        allNews.push(news);
        this.setState({
            news: allNews
        })
    }

    handleDeleteNews(id){
        let allNews = this.state.news;
        let index = allNews.findIndex(x => x.id === id);
        allNews.splice(index, 1);
        this.setState({
            news: allNews
        })
    }

    render(){
        return(
          <div>
              <div className="fb-like"
                   data-share="true"
                   data-width="450"
                   data-show-faces="true">
              </div>
              <div className="fb-post" data-href="https://www.facebook.com/20531316728/posts/10154009990506729/" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/20531316728/posts/10154009990506729/" className="fb-xfbml-parse-ignore">Posted by <a href="https://www.facebook.com/facebook/">Facebook</a> on&nbsp;<a href="https://www.facebook.com/20531316728/posts/10154009990506729/">Thursday, 27 August 2015</a></blockquote></div>
              <AddNews addNews={this.handleAddNews.bind(this)}/>
              <NewsBlock news={this.state.news} onDelete={this.handleDeleteNews.bind(this)}/>
              <hr/>
              <h2>Posts</h2>
              <Posts posts={this.state.posts}/>
          </div>
        )

    }
}
