import { CsvFileReader} from "./CsvFileReader"
import {dateStringToDate} from "../utils"
import {MatchResult} from "../MatchResult"

// !defined a tupple 
type MatchData = [Date, string, string, number, number, MatchResult, string]

// !MatchData is passed as generics
export class MatchReader extends CsvFileReader<MatchData> {

  mapRow(row: string[]): MatchData {
    return[
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      // !this us type assertions where we are explicitly refering row[5] as MatchResult
      row[5] as MatchResult,
      row[6] 
    ]
}
}