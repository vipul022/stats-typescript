import {CsvFileReader} from "./CsvFileReader"

import {MatchResult} from './MatchResult'
import {MatchReader} from "./MatchReader"

// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

// const reader = new MatchReader('football.csv')

// !create an object that satisfies the 'DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
// reader.read();

// console.log(reader.data)
// !Create an instance of MatchReader and pass in something that satisfy 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)

matchReader.load()
console.log(matchReader.matches)



// !generate report of all the wins of Manchester United

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
    manUnitedWins++;
  }
}

console.log(`Manchecter United has won ${manUnitedWins} matches`)