import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
    constructor(public data:number[]){
        super();
    }

    // one approach to get the length of the function
    // length():number{
    //     return this.data.length;
    // }

    // other method is to create a getter, this will let us call length without calling it has a function 
    // eg collection.length

    get length():number{
        return this.data.length;
    }

    compare (leftIndex:number, rightIndex:number) : boolean{
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex:number, rightIndex:number):void{
        const leftHand = this.data[leftIndex];
        this.data[leftIndex]  = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}