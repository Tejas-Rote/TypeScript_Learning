import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
    length:number;
    compare(leftIndex:number, rightIndex:number):boolean;
    swap(leftIndex:number, rightIndex:number):void;
}


export abstract class Sorter {
    
    // refactoring for inhertiance concept
    // constructor(public collection: Sortable ){}
    

    // sort():void{
    //     const {length} = this.collection;
        

    //     for(let i=0;i<length;i++){
    //         for(let j=0;j<length-i-1;j++){
    //             if(this.collection.compare(j, j+1)){
    //                 this.collection.swap(j , j+1);
    //             }
    //         }
    //     }
    // }

    abstract compare(leftIndex:number, rightIndex:number):boolean;
    abstract swap(leftIndex:number, rightIndex:number):void ;
    abstract length:number;


    sort():void{
        const {length} = this;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i-1;j++){
                if(this.compare(j, j+1)){
                    this.swap(j , j+1);
                }
            }
        }
    }

    // now the problem here is ts wont know that the class will have these methods when we add extends to the child class
    // this is the reason for the error of methods not in sorter class
}