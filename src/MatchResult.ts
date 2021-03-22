
// !enum - enumeration: enums allow us to declare a set of named constants i.e. a collection of closely related values that can be numeric or string values.
// ! * Enums follow identical syntax rules as normal objects
// ! * Enums create an object with same key and values when converted from TS to JS
// ! * It's primary goal is to signal to other developers that these are all closely related values
// ! Use whenever we have a small fixed set of values that are all closely related and known at compile time

export enum  MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}