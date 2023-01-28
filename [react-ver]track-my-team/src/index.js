import React from "react";
import ReactDOM from "react-dom";
import Dropbox from "./Dropbox/Dropbox";
import Heading from "./Heading";
import InfoBoard from "./InfoBoard";
// import UpcomingFxitures from "./UpcomingFixtures";
// import Results from "./Results";
import Standings from "./Standings";


ReactDOM.render(
    <div>
        <Heading />
        <Dropbox />
        <InfoBoard />
        <Standings />
    </div>,
    document.getElementById("root")
);
