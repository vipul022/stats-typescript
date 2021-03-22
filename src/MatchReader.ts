import {dateStringToDate} from "./utils"
import {MatchResult} from "./MatchResult"

// !defined a tupple 
type MatchData = [Date, string, string, number, number, MatchResult, string]
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

constructor(public reader: DataReader){}

load(): void {
  this.reader.read();
  // !iterate on each row and change the data types
  this.matches = this.reader.data.map((row: string[]): MatchData=> {
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
})
}

   
  
}