"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
//we can use tuple to specify the proper order of the row , so we need to make type of the tuple
// now again this class is not again reusable as the below .map() will not work for any other csv file format of data...
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        // type generics
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((row) => {
            return row.split(",");
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
