import React from "react";
import UpcomingBoard from "./UpcomingBoard";
import fixtures from "./fixtures";



function createBoard (fixture) {
  return <UpcomingBoard 
    league = {fixture["league"]}
    date = {fixture["date"].slice(0, 10)}
    time = {fixture["date"].slice(11,16)}
    timezone = "GMT"
    homeTeam = {fixture["home"]}
    homeLogo = {fixture["home-logo"]}
    awayTeam = {fixture["away"]}
    awayLogo = {fixture["away-logo"]}
  />
}

function UpcomingFxitures() {
    return <div className="col-lg-6 col-sm-10 container-left">
        <h2>UPCOMING FIXTURES</h2>
        <div className="initial-board">Pick A Team to Show Info</div>
        <ul className="list-group info-cards hidden">
        {fixtures.map(createBoard)}
        </ul>
    </div>
}

export default UpcomingFxitures;