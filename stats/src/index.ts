import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
// encoding file tells ts to output the contents of the file as a string rather than normal raw content

const reader = new MatchReader("football.csv");
reader.read();
console.log(reader.data[0]);

// // js refactor
// const MatchResult = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };
// enum - enumeration refactor
// now this also creates a new type named MatchResult

// // eg of type can be
// const printMatchResult = (match: string): MatchResult => {
//   if (match[5] === "H") {
//     return MatchResult.HomeWin;
//   }
//   return MatchResult.AwayWin;
// };

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times.`);

// issues with above code
// matching the string for win , genrealize it
// const homeWin = "H";
// const awayWin = "A";
// this can be one way but we are still hardcoded it in the main codebase
// all of the data is still string when some of the data is different likje date and numbers.
