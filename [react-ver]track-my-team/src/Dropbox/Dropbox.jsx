import React from "react";
import teamInfo from "../team-info";
import teamIds from "../teamIds";


// function makeDropdown(data, level1Filter) {

//     const filteredArray = data.filter(r => r[0] === level1Filter);

//     const uniqueOptions = new Set();
//     filteredArray.forEach(r => uniqueOptions.add(r[1]));

//     const selectLevel2 = document.getElementById("level2");

//     selectLevel2.innerHTML = "";

//     uniqueOptions.forEach(item => {
//         const option = document.createElement("option");
//         option.textContent = item;
//         selectLevel2.appendChild(option);
//     });

// }


// function applyDropdown() {
//     const selectLevel1 = document.getElementById("level1").value;
//     makeDropdown(teams, selectLevel1);
// }



function Dropbox() {

    return <div className="choose-teams container-fluid">

            <select className="form-select" id="level1">
                <option value="" disabled selected>Pick Team</option>
                <option value="Arsenal">Arsenal</option>
                <option value="Aston Villa">Aston Villa</option>
                <option value="Bournemouth">Bournemouth</option>
                <option value="Brentford">Brentford</option>
                <option value="Brighton">Brighton</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Crystal Palace">Crystal Palace</option>
                <option value="Everton">Everton</option>
                <option value="Fulham">Fulham</option>
                <option value="Leeds">Leeds</option>
                <option value="Leicester">Leicester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Manchester City">Manchester City</option>
                <option value="Manchester United">Manchester United</option>
                <option value="Newcastle">Newcastle</option>
                <option value="Nottingham Forest">Nottingham Forest</option>
                <option value="Southampton">Southampton</option>
                <option value="Tottenham">Tottenham</option>
                <option value="West Ham">West Ham</option>
                <option value="Wolves">Wolves</option>
            </select>

    </div>
}


export default Dropbox;