import React from 'react';
import Country from './Country';
var api = require('./api');
var axios = require('axios');

export default class MainPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isShown: false,
            name: "Will",
            country: [],
            test: []
        }

        this.changeName = this.changeName.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeName(e){
        this.setState({
            name: e.target.value
        })
    }

    changeLanguage(e){
        this.setState({
            language: e.target.value
        })
        console.log(this.state.language);
    }


    componentDidMount(){
        // api.fetchPopularRepos()
        //         .then((test) => {
        //             console.log(test);
        //         })

        axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                this.setState({
                    test: response.data
                })
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // componentWillMount() {
    //     fetch('https://restcountries.eu/rest/v2/all')
    //         .then((res) => {
    //             res.json().then((data) => {
    //                 this.setState({
    //                     country: data
    //                 })
    //             })
    //
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    render(){

        let test;
        test = this.state.test.map((countries, i) => <Country key={i} country={countries.name}/>);
        // console.log(this.state);



        return(
            <div>
                 <h2 style = {{color: "green"}}>Main page</h2>
                 <input type="text" onChange={this.changeName}/>
                 <h2 onClick={this.test}>{this.state.name}</h2>
                <label htmlFor="repo">Type in language you would like to check</label>
                <input type="text" id="repo" onChange={this.changeLanguage}/>

                <ul>
                    <li>All</li>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Java</li>
                    <li>CSS</li>
                </ul>
                {test}
                {JSON.stringify(this.state.repos)}
            </div>
        )
    }
}