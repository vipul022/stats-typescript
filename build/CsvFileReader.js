"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = require("fs");
// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
// !defined a tupple 
// !abstract means that we do not need to create an instance of this class instead this will act as a parent class so that it's children classes can inherit it's methods
var CsvFileReader = /** @class */ (function () {
    // ! it will take filename as argument
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.readFileSync(this.filename, {
            // ! encoding: 'utf-8' will return a giant string
            encoding: 'utf-8'
        })
            // !create an array an split on newline
            .split('\n')
            // !convert each row into an array of strings seprated by ,
            .map(function (row) {
            return row.split(',');
        })
            .map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
