import React from "react";

function Standings() {
    return <div className="col container-bottom">
    
        <h2>STANDINGS</h2>

        <div id="wg-api-football-standings" data-host="v3.football.api-sports.io" data-key=""
            data-league="39" data-team="" data-season="2022" data-theme="" data-show-errors="false"
            data-show-logos="true" className="wg_loader">
        </div>
        <script type="module" src="https://widgets.api-sports.io/2.0.3/widgets.js">
        </script>

    </div>
}

export default Standings;