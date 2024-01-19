// class Sorter {
//     // constructor(public collection:number[]){}
//     // bad approach to deal with strings
//     constructor(public collection:number[] | string ){}
    

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

import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// numbers
const numbersCollection = new NumbersCollection([10,3,-5,0])
console.log(numbersCollection.data)
numbersCollection.sort();
console.log(numbersCollection.data)

// stirng
const charactersCollection = new CharactersCollection('Xaayb');
console.log(charactersCollection.data)
charactersCollection.sort();
console.log(charactersCollection.data)


// linked list
const linkedList = new LinkedList();
linkedList .add(500);
linkedList .add(-10);
linkedList .add(3);
linkedList .add(-4);

linkedList.print();
linkedList.sort();
linkedList.print();

// // to make this even better we should refactor code to minimize this code and just simply call sort to sort the collection
// // to do that one method can be use the inheritance concept
