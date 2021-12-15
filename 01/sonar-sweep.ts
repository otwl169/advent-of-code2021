// CHALLENGE DAY 1 AVENT OF CODE

import { readFileSync } from 'fs';

const sonar_data : string = readFileSync("./sonar-data.txt", "utf-8");
const array_data : string[] = sonar_data.split("\n");
const array_int_data : number[] = array_data.map(Number);

console.log("MERRY CHRISTMAS");
// console.log(array_data);

function sonar_sweep(data : string[]) {
    // Challenge is to print out the number of depths that are increasing in input
    let increasing_segments : number = 0;
    for (let i = 1; i < data.length; i++) {
        if (+data[i] > +data[i-1]) increasing_segments++;
        // the unary + operator converts a string to a number
        // usage:   var x = "32"
        //          var y : number = + x
    }

    console.log(increasing_segments);
}

function sonar_sweep2(data: number[]) {
    // Output the number of depths that are increasing in a sliding window of size 3
    let window1 : number = data[0] + data[1] + data[2];
    let increasing_segments : number = 0;
    for(let i = 1; i < data.length - 1; i++) {
        let window2 : number = data[i-1] + data[i] + data[i+1];
        if (window2 > window1) increasing_segments++;
        window1 = window2;
    }

    console.log(increasing_segments);
}

sonar_sweep(array_data);
sonar_sweep2(array_int_data);