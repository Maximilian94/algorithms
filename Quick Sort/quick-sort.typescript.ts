import {generateRandomArray} from "../utils/generateRandomArray";

const randomArray = generateRandomArray(6, 30);

function QuickSort (list:Array<number>) {
    if(list.length <= 1) return list;

    const lastItemIndex = list.length - 1;
    const pivot = list[lastItemIndex];

    const tempGreaterThanList:Array<number> = []
    const tempLessThanList:Array<number> = []

    let greaterThanList:Array<number> = []
    let lessThanList:Array<number> = []

    for(let i = 0; i < lastItemIndex; i++) {
        const item = list[i];
        if(item >= pivot) tempGreaterThanList.push(item)
        if(item < pivot) tempLessThanList.push(item)

    }

    if(tempGreaterThanList.length > 1){
        greaterThanList = QuickSort(tempGreaterThanList)
    } else {
        greaterThanList = tempGreaterThanList
    }

    if(tempLessThanList.length > 1){
        lessThanList = QuickSort(tempLessThanList)
    } else {
        lessThanList = tempLessThanList
    }

    return [...lessThanList, pivot, ...greaterThanList]
}

console.log('not sorted',randomArray)
console.log('sorted', QuickSort(randomArray))