import { readFileSync } from 'fs';

// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options


const matches = readFileSync('football.csv', {
  // ! encoding: 'utf-8' will return a giant string
  encoding: 'utf-8' 
}).split('\n').map((row: string): string[] => {
  return row.split(',')
})

// !enum - enumeration: enums allow us to declare a set of named constants i.e. a collection of closely related values that can be numeric or string values.
// ! * Enums follow identical syntax rules as normal objects
// ! * Enums create an object with same key and values when converted from TS to JS
// ! * It's primary goal is to signal to other developers that these are all closely related values
// ! Use whenever we have a small fixed set of values that are all closely related and known at compile time

enum  MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

// !generate report of all the wins of Manchester United

let manUnitedWins = 0;

for (let match of matches) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    manUnitedWins++;
  }
}

console.log(`Manchecter United has won ${manUnitedWins} matches`)