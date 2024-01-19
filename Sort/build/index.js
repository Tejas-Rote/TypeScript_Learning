"use strict";
// class Sorter {
//     // constructor(public collection:number[]){}
//     // bad approach to deal with strings
//     constructor(public collection:number[] | string ){}
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
console.log(numbersCollection.data);
numbersCollection.sort();
console.log(numbersCollection.data);
// stirng
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(charactersCollection.data);
// linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(-4);
linkedList.print();
linkedList.sort();
linkedList.print();
// // to make this even better we should refactor code to minimize this code and just simply call sort to sort the collection
// // to do that one method can be use the inheritance concept
