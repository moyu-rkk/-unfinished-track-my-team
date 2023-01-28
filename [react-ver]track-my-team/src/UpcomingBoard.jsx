import React from "react";


function UpcomingBoard(props) {
    return <li className="list-group-item upcoming-board">

        <div className="fixture-date" id="upcoming-date"> {props.date} </div>
        <div className="league-name" id="upcoming-league"> {props.league} </div>

        <div className="scoreboard">
            <div className="upcoming-first-team team-info">
                <div className="logo">
                    <img src={props.homeLogo} className="logo" alt=""></img>
                </div>
                <div className="upcoming-first-team-name"><strong> {props.homeTeam} </strong></div>
            </div>

            <div className="upcoming-time">
                <p className="time"><strong> {props.time} </strong></p>
                <p className="timezone"> {props.timezone} </p>
            </div>

            <div className="upcoming-second-team team-info">
                <div className="logo">
                    <img src={props.awayLogo} className="logo" alt=""></img>
                </div>
                <div className="upcoming-second-team-name"><strong>{props.awayTeam}</strong></div>
            </div>
        </div>
    </li>
}

export default UpcomingBoard;
