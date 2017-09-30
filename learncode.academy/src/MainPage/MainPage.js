import React from 'react';
import Country from './Country';
let axios = require('axios');

export default class MainPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isShown: false,
            name: "Will",
            country: [],
            language: []
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
      let language = document.querySelector("#repo").value;

      fetch('https://www.facebook.com/plugins/post/oembed.json/?url=https://www.facebook.com/nba/')
              .then((res) => {
                  res.json().then((data) => {
                      this.setState({
                          language: data
                      })
                      console.log(this.state.language);
                  })

              })
              .catch((err) => {
                  console.log(err)
              })
    }


    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                this.setState({
                    country: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){

        let countries;
        countries = this.state.country.map((countries, i) => <Country key={i} country={countries.name}/>);

        return(
            <div>
                 <h2 style = {{color: "green"}}>Main page</h2>
                 <input type="text" onChange={this.changeName}/>
                 <h2 onClick={this.test}>{this.state.name}</h2>
                <label htmlFor="repo">Type in language you would like to check</label>
                <input type="text" id="repo"/>
                <button onClick={this.changeLanguage}>Search</button>
                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fnba%2Fvideos%2F10155615517483463%2F&show_text=1&width=560" width="560" height="407" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true"></iframe>
                <ul>
                    <li>All</li>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Java</li>
                    <li>CSS</li>
                </ul>
                {countries}
                {JSON.stringify(this.state.repos)}
            </div>
        )
    }
}
