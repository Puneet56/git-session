import fs from 'fs';


console.log("Heloo world");

const files = fs.readFileSync("file.txt").toString().split("\n");


files.forEach((line) => {
    console.log(line);
});