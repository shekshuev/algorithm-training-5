const readline = require("readline");
const fs = require("fs");

const input = [];

readline
    .createInterface({
        input: fs.createReadStream("input.txt")
    })
    .on("line", line => {
        input.push(line.split(" ").map(s => parseInt(s)));
    })
    .on("close", () => solve(input));

function solve(input) {
    const [p, v] = input[0];
    const [q, m] = input[1];
    const result =
        2 * (v + m + 1) -
        Math.max(0, Math.min(p + v, q + m) - Math.max(p - v, q - m) + 1);
    console.log(result);
}
