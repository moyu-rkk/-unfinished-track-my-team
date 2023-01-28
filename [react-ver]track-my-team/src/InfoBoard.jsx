import React, { useEffect } from "react";
import UpcomingBoard from "./UpcomingBoard";
import ResultBoard from "./ResultBoard";
import fixtures from "./fixtures";


function createUpcomingBoard(fixture) {
    return <UpcomingBoard
        league={fixture["league"]}
        date={fixture["date"].slice(0, 10)}
        time={fixture["date"].slice(11, 16)}
        timezone="GMT"
        homeTeam={fixture["home"]}
        homeLogo={fixture["home-logo"]}
        awayTeam={fixture["away"]}
        awayLogo={fixture["away-logo"]}
    />
}

function createResultBoard(fixture) {
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


function InfoBoard() {
    // useEffect(() => {
    //     const initialBoard = document.getElementsByClassName("initial-board");
    //     initialBoard.classList.add("hidden");

    //     const infoBoard = document.getElementsByClassName("info-cards");
    //     infoBoard.classList.remove("hidden");
    // },
    //     document.getElementsById("level1")
    // )

    return <div class="row flex-container">

        <div><button type="submit" class="add-btn">Add</button></div>

        <div className="col-lg-6 col-sm-10 container-left">
            <h2>UPCOMING FIXTURES</h2>
            <div className="initial-board hidden">Pick A Team to Show Info</div>
            <ul className="list-group info-cards">
                {fixtures.map(createUpcomingBoard)}
            </ul>
        </div>

        <div className="col-lg-6 col-sm-10 container-right">
            <h2>LATEST RESULTS</h2>
            <div className="initial-board hidden">Pick A Team to Show Info</div>
            <ul className="list-group info-cards">
                {fixtures.map(createResultBoard)}
            </ul>
        </div>

    </div>
}

export default InfoBoard;