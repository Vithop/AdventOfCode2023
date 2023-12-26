import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";


// Grab values from page
// const  data = document.getElementsByTagName("pre")[0].innerText.split("\n")
// data.pop()

const sum = (a: number, c: number) => a + c;
const isNum = (n: string) => Number(n);

const wordToNumberMap = {
  "zero": 0,
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4,
  "five": 5,
  "six": 6,
  "seven": 7,
  "eight": 8,
  "nine": 9,
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,      
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
}

const part1Rgx = /(?=([0-9]))/g;
const part2Rgx = /(?=((one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)|([0-9])))/g;
const parseNumsWithRgx = (str, rgx) => Array.from(str.matchAll(rgx), (m) => m[1]);
const parsePart1 = (str) => parseNumsWithRgx(str, part1Rgx);
const parsePart2 = (str) => parseNumsWithRgx(str, part2Rgx);

function adventOfCode2023Day1(data: Array<string>, parseNums: fn (string ) => Array<number> ): number{
    return data.map(e => {
        const numArr = parseNums(e)
        return wordToNumberMap[numArr[0]]*10 + wordToNumberMap[numArr.pop()]
    }).reduce(sum)
}


Deno.test( function SingleCalibrationValueTest() {
    assertEquals(adventOfCode2023Day1(["76xkqjzqtwonfour"]), 76)
    assertEquals(adventOfCode2023Day1(["fourseven5seveneightsvtkcjdrfour"]), 55)
})

Deno.test( function TwoCalibrationValueTest() {
    assertEquals(adventOfCode2023Day1(["76xkqjzqtwonfour", "fourseven5seveneightsvtkcjdrfour"]), 131)
})
