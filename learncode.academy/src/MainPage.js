import React from 'react';

export default class MainPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isShown: false,
            name: "Will"
        }

        this.changeName = this.changeName.bind(this);
    }

    changeName(e){

        this.setState({
            name: e.target.value
        })
    }


    render() {
        return(
            <div>
                 <h2 style = {{color: "green"}}>Main page</h2>
                 <input type="text" onChange={this.changeName}/>
                 <h2>{this.state.name}</h2>
            </div>
        )
    }
}