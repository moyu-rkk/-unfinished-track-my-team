const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
})

const teamIds = {
  "Arsenal": 42,
  "Aston Villa": 66,
  "Bournemouth": 35,
  "Brentford": 55,
  "Brighton": 51,
  "Chelsea": 49,
  "Crystal Palace": 52,
  "Everton": 45,
  "Fulham": 36,
  "Leeds": 63,
  "Leicester": 46,
  "Liverpool": 40,
  "Manchester City": 50,
  "Manchester United": 33,
  "Newcastle": 34,
  "Nottingham Forest": 65,
  "Southampton": 41,
  "Tottenham": 47,
  "West Ham": 48,
  "Wolves": 39,
  "1899 Hoffenheim": 167,
  "Bayer Leverkusen": 168,
  "Bayern Munich": 157,
  "Borussia Dortmund": 165,
  "Borussia Monchengladbach": 163,
  "Eintracht Frankfurt": 169,
  "FC Augsburg": 170,
  "FC Koln": 192,
  "FC Schalke 04": 174,
  "FSV Mainz 05": 164,
  "Hertha Berlin": 159,
  "RB Leipzig": 173,
  "SC Freiburg": 160,
  "Union Berlin": 182,
  "VfB Stuttgart": 172,
  "VfL BOCHUM": 176,
  "VfL Wolfsburg": 161,
  "Werder Bremen": 162,
}

app.post("/", function (req1, res1) {
  const selected = req1.body.teamName;
  const teamId = teamIds[selected]
  console.log(selected);
  console.log(teamId);

  // const options = {
  //   "method": "GET",
  //   "hostname": "api-football-v1.p.rapidapi.com",
  //   "port": null,
  //   "path": "/v3/fixtures?season=2022&team=" + teamId + "&last=3",
  //   "headers": {
  //     "X-RapidAPI-Key": "",
  //     "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
  //     "useQueryString": true
  //   }
  // };

  // const req = https.request(options, function (res) {
  //   const chunks = [];

  //   res.on("data", function (chunk) {
  //     chunks.push(chunk);
  //   });

  //   res.on("end", function () {
  //     const body = Buffer.concat(chunks);
  //     const dataString = body.toString();
  //     const fixtureData = JSON.parse(dataString);
  //     console.log(fixtureData);

  //     let lastGame = [];

  //     for (var i = 0; i < 3; i++) {
  //       var Array = {
  //         "league": fixtureData.response[i].league.name,
  //         "date": fixtureData.response[i].fixture.date,
  //         "home": fixtureData.response[i].teams.home.name,
  //         "away": fixtureData.response[i].teams.away.name,
  //         "home-goals": fixtureData.response[i].goals.home,
  //         "away-goals": fixtureData.response[i].goals.away,
  //         "home-logo": fixtureData.response[i].teams.home.logo,
  //         "away-logo": fixtureData.response[i].teams.away.logo
  //       };

  //       lastGame.push(Array);
  //     }

  //     console.log(lastGame);

  //     var resultInfo = JSON.stringify(lastGame);

  //     fs.writeFile("fixture-info.json", resultInfo, 'utf-8', function (err) {
  //       if (err) {
  //         console.log("An error occured while writing JSON Object to File.");
  //         return console.log(err);
  //       }

  //       console.log("JSON file has been saved.");
  //     })


  //   });
  // });

  // req.end();

  res1.redirect('back');

})


app.listen(3000, function () {
  console.log("Server on.");
})
