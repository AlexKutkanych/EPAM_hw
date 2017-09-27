import React, { Component } from 'react';
import Conferences from './Conferences';
import TeamProfile from './TeamProfile';




export default class Teams extends Component{
    constructor(props){
        super(props);
        this.state = {
            showWCTeams: false,
            showECTeams: false
        }

        this.showTeams = this.showTeams.bind(this);
    }

    showTeams(e){
        e.preventDefault();

        const showWesternTeams = this.state.showWCTeams === true ? false : true;
        const showEasternTeams = this.state.showECTeams === true ? false : true;
        const dataAttr = "data-conference";

        if(e.target.dataset.conference === "WesternConference") {
            this.setState({
                showWCTeams: showWesternTeams
            });
        } else if (e.target.dataset.conference === "EasternConference") {
            this.setState({
                showECTeams: showEasternTeams
            });
        }
    }



    render(){

        const WCTeamsData = [
            {name: "Team1", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"},
            {name: "Team2", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"},
            {name: "Team3", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"}

        ].map((teams, i) => <TeamProfile key={i} name={teams.name} img={teams.img} alt={teams.alt} desc={teams.desc}/>);

        const ECTeamsData = [
            {name: "Team4", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Eastern_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"},
            {name: "Team5", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Eastern_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"},
            {name: "Team6", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Eastern_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo", desc: "description description descriptiondescription"}
        ].map((teams, i) => <TeamProfile key={i} name={teams.name} img={teams.img} alt={teams.alt} desc={teams.desc}/>);


        const ConferenceData = [
            {name: "WesternConference", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Western_Conference_%28NBA%29_logo.gif", alt: "Western Conference Logo"},
            {name: "EasternConference", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Eastern_Conference_%28NBA%29_logo.gif", alt: "Eastern Conference Logo"}
        ].map((conference, i) => <Conferences key={i} name={conference.name} img={conference.img} alt={conference.alt} onClick={this.showTeams}/>);


        return (
            <div>
                {ConferenceData}
                {this.state.showWCTeams ? WCTeamsData : null}
                {this.state.showECTeams ? ECTeamsData : null}
            </div>

        )
    }



}
