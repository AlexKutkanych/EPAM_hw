import React from 'react';
import TeamProfile from './TeamProfile';

export default class Teams extends React.Component{

    render() {

        const Teams = [
            {name: "Team1", desc: "Team1 Team1 Team1 Team1 Team1 Team1"},
            {name: "Team2", desc: "Team1 Team1 Team1 Team1 Team1 Team1"}
        ].map((team, i) => <TeamProfile key={i} name={team.name} desc={team.desc} />);

        return(

            <div>
                <h2>Teams</h2>
                {Teams}


            </div>

        )
    }
}