"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
// const reader = new MatchReader('football.csv')
// !create an object that satisfies the 'DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// reader.read();
// console.log(reader.data)
// !Create an instance of MatchReader and pass in something that satisfy 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches);
// !generate report of all the wins of Manchester United
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchecter United has won " + manUnitedWins + " matches");
