// CHALLENGE DAY 3 ADVENT OF CODE

import { readFileSync } from 'fs';

let data : string[] = readFileSync("./input.txt", "utf-8").split("\n");

function getOccurences(arr : String[]) : number[] {
    let occurences : number[] = new Array(arr[0].length).fill(0); // initialise occurrences at 0 for each bit

    for (let str of arr) {
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == '1') occurences[i] += 1;
        }
    }

    return occurences;
}

function getPowerConsumption(report : string[]) : number {
    let n : number = report.length;
    let occurences : number[] = getOccurences(report);

    let gamma : string = "", epsilon : string = "";
    for (let times of occurences) {
        gamma   += (times >= n / 2) ? "1" : "0";
        epsilon += (times > n / 2) ? "0" : "1";
    }

    console.log("Gamma rate: " + gamma + ", Epsilon rate: " + epsilon);
    console.log("Gamma value: " + parseInt(gamma, 2) + ", Epsilon value: " + parseInt(epsilon, 2));
    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}


function getLifeSupportRating(report : string[]) : number {
    let n : number = report.length;
    let occurrences : any[];
    let oxygen : string[] = [...report], co2 : string[] = [...report]; // initialises 2 copies of report to filter


    for(let i = 0; i < report[0].length; i++) {
        // iterate while we still have bits to filter

        // get the occurrences of each bit as we filter by new rules    
        if (oxygen.length > 1) {
            // occurrences should hold what we want to keep in each digit. getOccurrences returns the number of occurrences of each digit
            n = oxygen.length;
            occurrences = getOccurences(oxygen).map(times => (times >= n / 2) ? "1" : "0");
            oxygen = oxygen.filter(str => str.charAt(i) == occurrences[i]);
        }

        if (co2.length > 1) {
            n = co2.length;
            occurrences = getOccurences(co2).map(times => (times >= n / 2) ? "0" : "1"); // the case where there are equal number, we prefer 0
            co2 = co2.filter(str => str.charAt(i) == occurrences[i]);
        }    

    }

    console.log(co2);
    console.log(oxygen);
    let oxygenRating : string = oxygen[0], co2Rating : string  = co2[0]
    console.log("Oxygen generator rating: " + oxygenRating + ", CO2 Scrubber Rating: " + co2Rating);
    console.log("Oxygen generator value: " + parseInt(oxygenRating, 2) + ", CO2 Scrubber value: " + parseInt(co2Rating, 2));
    return parseInt(oxygenRating, 2) * parseInt(co2Rating, 2);
}

console.log("Power consumption = " + getPowerConsumption(data));
console.log("Life support rating = " + getLifeSupportRating(data));