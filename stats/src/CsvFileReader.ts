import fs from "fs";

//we can use tuple to specify the proper order of the row , so we need to make type of the tuple
// now again this class is not again reusable as the below .map() will not work for any other csv file format of data...

export abstract class CsvFileReader<T> {
  // type generics
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
