import React from 'react';


export default class AddNews extends React.Component{

    constructor(){
        super();
        this.state = {
            newNews: {}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    static defaultProps = {
        categories: ["date1", "date2", "date3"]
    };

    handleSubmit(e){
        e.preventDefault();

        if(this.refs.title.value === ''){
            alert("title is required");
        } else {
            this.setState({
                newNews: {
                    title: this.refs.title.value,
                    date: this.refs.date.value
                }}, function(){
                    this.props.addNews(this.state.newNews);
                })
        }

        console.log(this.refs.title.value);
    }



    render(){

        let categoryOption = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        });

        return(
            <div>
               <h3>Add News</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="">Title</label><br />
                        <input type="text" ref="title"/>
                    </div>
                    <div>
                        <label>Date</label><br />
                        <select name="" id="" ref="date">
                            {categoryOption}
                        </select>
                    </div>
                    <input type="submit"/>
                </form>

            </div>
        )
    }
}