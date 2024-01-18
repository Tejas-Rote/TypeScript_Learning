"use strict";
// class Sorter {
//     // constructor(public collection:number[]){}
//     // bad approach to deal with strings
//     constructor(public collection:number[] | string ){}
Object.defineProperty(exports, "__esModule", { value: true });
//     sort():void{
//         const {length} = this.collection;
//         for(let i=0;i<length;i++){
//             for(let j=0;j<length-i-1;j++){
//                 // this code will not work for strings 
//                 // to solve this issue bad approaach can be writting different codes for different types 
//                 // one code for numbers and one code for string . 
//                 // To aachieve that we will use 'TYPE GAURD'
//                 // this only works if collection is of numbers
//                 if(this.collection instanceof Array){
//                     if(this.collection[j]>this.collection[j+1]){
//                         const temp = this.collection[j];
//                         this.collection[j] = this.collection[j+1];
//                         this.collection[j+1] = temp;
//                     }
//                 }
//                 // only works if collection is string
//                 if(typeof this.collection === 'string'){
//                 }
//                 // this approach is bad beacuse in future if we had to add some more functionality we will have to come back to the sorter class and change them
//             }
//         }
//     }
// }
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// numbers
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const sorter1 = new Sorter_1.Sorter(numbersCollection);
console.log(sorter1.collection);
sorter1.sort();
console.log(numbersCollection.data);
// stirng
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xaayb');
const sorter2 = new Sorter_1.Sorter(charactersCollection);
console.log(sorter2.collection);
sorter2.sort();
console.log(charactersCollection.data);
// linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(3);
linkedList.add(-4);
const sorter3 = new Sorter_1.Sorter(linkedList);
console.log(sorter3.collection);
sorter3.sort();
linkedList.print();
// to make this even better we should refactor code to minimize this code and just simply call sort to sort the collection
// to do that one method can be use the inheritance concept
