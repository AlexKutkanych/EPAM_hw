import React from 'react';
import PostItem from './PostItem';

export default class Posts extends React.Component{


    render(){
        let postItem;

        postItem = this.props.posts.map((post, i) => <PostItem key={i}  post={post}/>)

        return(
            <div className="posts-block">

                {postItem}
            </div>

        )
    }
}