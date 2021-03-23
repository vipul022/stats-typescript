"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var ConsoleReports_1 = require("./reportTargets/ConsoleReports");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
// !create an object that satisfies the 'DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// reader.read();
// console.log(reader.data)
// !Create an instance of MatchReader and pass in something that satisfy 'DataReader' interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// ! create instances of WinsAnalysis and ConsoleReports/HtmlReport and pass them to Summary and call summary.buildAndPrintReport to generate report
var winsAnalysis = new WinsAnalysis_1.WinsAnalysis('Man United');
var consoleReports = new ConsoleReports_1.ConsoleReports();
var htmlReports = new HtmlReport_1.HtmlReport();
var summary = new Summary_1.Summary(winsAnalysis, htmlReports);
summary.buildAndPrintReport(matchReader.matches);
