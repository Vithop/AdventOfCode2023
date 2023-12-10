import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";


// Grab values from page
// const calibrationVals = temp0.innerText.split("\n"); 

const sum = (a: number, c: number) => a + c;
const isNum = (n: string) => Number(n);

function adventOfCode2023Day1( calibrationVals: Array<string>): number {
    return calibrationVals.map(calibrationString => {
        const charArr = Array.from(calibrationString);
        return Number(charArr.find( isNum ) + charArr.findLast( isNum )!)
    }).reduce(sum); 
}


Deno.test( function SingleCalibrationValueTest() {
    assertEquals(adventOfCode2023Day1(["76xkqjzqtwonfour"]), 76)
    assertEquals(adventOfCode2023Day1(["fourseven5seveneightsvtkcjdrfour"]), 55)
})

Deno.test( function TwoCalibrationValueTest() {
    assertEquals(adventOfCode2023Day1(["76xkqjzqtwonfour", "fourseven5seveneightsvtkcjdrfour"]), 131)
})