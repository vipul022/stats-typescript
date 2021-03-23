import {CsvFileReader} from "./CsvFileReader"
import {MatchReader} from "./MatchReader"
import {Summary} from "./Summary"
import { WinsAnalysis} from "./analyzers/WinsAnalysis"
import {ConsoleReports} from "./reportTargets/ConsoleReports"
import {HtmlReport} from "./reportTargets/HtmlReport"






// !create an object that satisfies the 'DataReader interface
const csvFileReader = new CsvFileReader('football.csv')
// reader.read();

// console.log(reader.data)
// !Create an instance of MatchReader and pass in something that satisfy 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)

matchReader.load()

// ! create instances of WinsAnalysis and ConsoleReports/HtmlReport and pass them to Summary and call summary.buildAndPrintReport to generate report
const winsAnalysis = new WinsAnalysis('Man United')

const consoleReports = new ConsoleReports()
const htmlReports = new HtmlReport
const summary = new Summary(winsAnalysis, consoleReports)

summary.buildAndPrintReport(matchReader.matches)

