import { readFileSync } from 'fs';



// ! resorces: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
 

// !abstract means that we do not need to create an instance of this class instead this will act as a parent class so that it's children classes can inherit it's methods. <T> is p[assed as generics
export abstract class CsvFileReader<T> {

  data: T[] = [];
// ! it will take filename as argument
  constructor(public filename: string){}

    // !iterate on each row and change the data types
    abstract mapRow(row: string[]): T 

  read(): void {
    this.data = readFileSync(this.filename, {
      // ! encoding: 'utf-8' will return a giant string
      encoding: 'utf-8' 
    })
    // !create an array an split on newline
    .split('\n')
    // !convert each row into an array of strings seprated by ,
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow)
    
    
  }

}
