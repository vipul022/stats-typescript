"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
var matches = fs_1.readFileSync('football.csv', {
    // ! encoding: 'utf-8' will return a giant string
    encoding: 'utf-8'
}).split('\n').map(function (row) {
    return row.split(',');
});
// !enum - enumeration: enums allow us to declare a set of named constants i.e. a collection of closely related values that can be numeric or string values.
// ! * Enums follow identical syntax rules as normal objects
// ! * Enums create an object with same key and values when converted from TS to JS
// ! * It's primary goal is to signal to other developers that these are all closely related values
// ! Use whenever we have a small fixed set of values that are all closely related and known at compile time
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// !generate report of all the wins of Manchester United
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Manchecter United has won " + manUnitedWins + " matches");
