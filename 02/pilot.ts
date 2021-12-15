// CHALLENGE DAY 2 ADVENT OF CODE

import { readFileSync } from 'fs';

const commands : string[][] = readFileSync("./input.txt", "utf-8").split("\n").map(s => s.split(" ")); // think this is an inline function

function getPosition(commands : string[][]) {
    // given string[] of format: forward x, up y, down z, return the coordinates of the submarine
    let x : number = 0, y : number = 0;
    let direction : string, distance : number;
    let command : string[];
    for (command of commands) {
        direction = command[0];
        distance = +command[1];
        if (direction == "forward") x += distance;
        if (direction == "up")      y -= distance;
        if (direction == "down")    y += distance;
    }

    console.log("x =", x, "y = ", y);
    console.log("x*y = ", x*y);
}

function getPosition2(commands : string[][]) {
    // given string[] of format: forward x, up y, down z, return the coordinates of the submarine
    let x : number = 0, 
        y : number = 0, 
        aim: number = 0,
        distance: number = 0;

    let direction : string;
    let command : string[];
    for (command of commands) {
        direction = command[0];
        distance = +command[1];
        if (direction == "forward") {
            x += distance;
            y += aim * distance;
        }
        if (direction == "up")      aim -= distance;
        if (direction == "down")    aim += distance;
    }

    console.log("x =", x, "y = ", y);
    console.log("x*y = ", x*y);
}

getPosition(commands);
getPosition2(commands);