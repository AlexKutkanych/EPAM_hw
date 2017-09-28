import React from 'react';
import PlayerProfile from './PlayerProfile';
import '../App.css';

export default class Players extends React.Component{




    render() {

        const Players = [
            {id: 0, number: 6, name: "LeBron", position: "SF", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"},
            {id: 1, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"},
            {id: 2, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"},
            {id: 3, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"},
            {id: 4, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"},
            {id: 5, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"},
            {id: 6, number: 3, name: "Wade", position: "SG", picture: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254"}

        ].map((title, i) => <PlayerProfile key={i} title={title.name} position={title.position} picture={title.picture} />);



        return(
            <div>
                <h2 style = {{color: "green"}}>Players</h2>
                <div className="Players-block">
                    {Players}
                </div>
            </div>

                )
    }
}