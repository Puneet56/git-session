import fs from 'fs';

import { Component } from "./component";


const files = fs.readFileSync("file.txt").toString().split("\n");


files.forEach((line) => {
    console.log(line);
});