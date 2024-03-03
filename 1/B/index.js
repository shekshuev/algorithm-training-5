const readline = require("readline");
const fs = require("fs");

let currentLine = 0;
const scores = [];
let homeFirstGame;

readline
    .createInterface({
        input: fs.createReadStream(__dirname + "/input.txt")
    })
    .on("line", line => {
        if (currentLine++ > 1) {
            homeFirstGame = parseInt(line, 10);
        } else {
            scores.push(line.split(":").map(s => parseInt(s, 10)));
        }
    })
    .on("close", solve);

function solve() {
    let result = 0;
    const firstTeamHome = homeFirstGame === 1 ? scores[0][0] : scores[1][0];
    const firstTeamAway = homeFirstGame === 1 ? scores[1][0] : scores[0][0];
    const secondTeamHome = homeFirstGame === 1 ? scores[1][1] : scores[0][1];
    const secondTeamAway = homeFirstGame === 1 ? scores[0][1] : scores[1][1];
    const score1 = firstTeamHome + firstTeamAway;
    const score2 = secondTeamHome + secondTeamAway;
    if (score2 >= score1) {
        result += score2 - score1;
        if (result === 0 && firstTeamAway <= secondTeamAway) {
            result++;
        } else {
            if (homeFirstGame === 1) {
                if (firstTeamAway + result <= secondTeamAway) {
                    result++;
                }
            } else {
                if (firstTeamAway <= secondTeamAway) {
                    result++;
                }
            }
        }
    }

    console.log(result);
}
