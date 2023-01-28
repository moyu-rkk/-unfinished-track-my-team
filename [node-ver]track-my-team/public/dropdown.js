const teams = [
    ["Premier League", "Arsenal"],
    ["Premier League", "Aston Villa"],
    ["Premier League", "Bournemouth"],
    ["Premier League", "Brentford"],
    ["Premier League", "Brighton"],
    ["Premier League", "Chelsea"],
    ["Premier League", "Crystal Palace"],
    ["Premier League", "Everton"],
    ["Premier League", "Fulham"],
    ["Premier League", "Leeds"],
    ["Premier League", "Leicester"],
    ["Premier League", "Liverpool"],
    ["Premier League", "Manchester City"],
    ["Premier League", "Manchester United"],
    ["Premier League", "Newcastle"],
    ["Premier League", "Nottingham Forest"],
    ["Premier League", "Southampton"],
    ["Premier League", "Tottenham"],
    ["Premier League", "West Ham"],
    ["Premier League", "Wolves"],
    ["Bundesliga", "1899 Hoffenheim"],
    ["Bundesliga", "Bayer Leverkusen"],
    ["Bundesliga", "Bayern Munich"],
    ["Bundesliga", "Borussia Dortmund"],
    ["Bundesliga", "Borussia Monchengladbach"],
    ["Bundesliga", "Eintracht Frankfurt"],
    ["Bundesliga", "FC Augsburg"],
    ["Bundesliga", "FC Koln"],
    ["Bundesliga", "FC Schalke 04"],
    ["Bundesliga", "FSV Mainz 05"],
    ["Bundesliga", "Hertha Berlin"],
    ["Bundesliga", "RB Leipzig"],
    ["Bundesliga", "SC Freiburg"],
    ["Bundesliga", "Union Berlin"],
    ["Bundesliga", "VfB Stuttgart"],
    ["Bundesliga", "VfL BOCHUM"],
    ["Bundesliga", "VfL Wolfsburg"],
    ["Bundesliga", "Werder Bremen"],
];


function makeDropdown(data, level1Filter) {

    const filteredArray = data.filter(r => r[0] === level1Filter);

    const uniqueOptions = new Set();
    filteredArray.forEach(r => uniqueOptions.add(r[1]));

    const selectLevel2 = document.getElementById("level2");

    selectLevel2.innerHTML = "";

    uniqueOptions.forEach(item => {
        const option = document.createElement("option");
        option.textContent = item;
        selectLevel2.appendChild(option);
    });

}


function applyDropdown() {
    const selectLevel1 = document.getElementById("level1").value;
    console.log(selectLevel1);
    makeDropdown(teams, selectLevel1);
}

document.querySelector('#level1').addEventListener("change", applyDropdown);
