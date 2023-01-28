import React from "react";


function ResultBoard(props) {
    return <li className="list-group-item result-board">

        <div className="fixture-date" id="result-date">{props.date}</div>
        <div className="league-name" id="result-league">{props.league}</div>

        <div className="scoreboard">
            <div className="result-first-team">

                <div className="team-info">
                    <div className="logo" id="result-first-logo">
                        <img src={props.homeLogo} className="logo" alt="" />
                    </div>
                    <div className="result-first-team-name"><strong>{props.homeTeam}</strong></div>
                </div>

                <div className="result-first-team-goals score">{props.homeGoals}</div>
            </div>

            <div className="result-second-team">

                <div className="result-first-team-goals score">{props.awayGoals}</div>

                <div className="team-info">
                    <div className="logo" id="result-second-logo">
                        <img src={props.awayLogo} className="logo" alt="" />
                    </div>
                    <div className="result-second-team-name"><strong>{props.awayTeam}</strong></div>
                </div>
            </div>
        </div>
    </li>
}

export default ResultBoard;