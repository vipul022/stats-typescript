import { readFileSync } from 'fs';


// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options

export class CsvFileReader {

 data: string[][] = [];
// ! it will take filename as argument
 constructor(public filename: string){}

 read(): void {
   this.data = readFileSync(this.filename, {
     // ! encoding: 'utf-8' will return a giant string
     encoding: 'utf-8' 
   })
   // !create an array of strings an split on newline
   .split('\n')
   // !convert each row into an array of strings seprated by ,
   .map((row: string): string[] => {
     return row.split(',')
   })
  
   
 }
}
 