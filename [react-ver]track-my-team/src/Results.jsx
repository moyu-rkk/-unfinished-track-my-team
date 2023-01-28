import React from "react";
import ResultBoard from "./ResultBoard";
import fixtures from "./fixtures";


function createBoard(fixture) {
    return <ResultBoard
        league={fixture["league"]}
        date={fixture["date"].slice(0, 10)}
        homeTeam={fixture["home"]}
        homeLogo={fixture["home-logo"]}
        awayTeam={fixture["away"]}
        awayLogo={fixture["away-logo"]}
        homeGoals={fixture["home-goals"]}
        awayGoals={fixture["away-goals"]}
    />
}


function Results() {
    return <div className="col-lg-6 col-sm-10 container-right">
        <h2>LATEST RESULTS</h2>
        <div className="initial-board">Pick A Team to Show Info</div>
        <ul className="list-group info-cards hidden">
        {fixtures.map(createBoard)}
        </ul>
    </div>
}

export default Results;