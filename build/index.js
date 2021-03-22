"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
var MatchReader_1 = require("./MatchReader");
// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
console.log(reader.data);
// !generate report of all the wins of Manchester United
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchecter United has won " + manUnitedWins + " matches");
