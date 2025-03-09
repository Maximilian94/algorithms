import {generateRandomArray} from "../utils/generateRandomArray";

const randomArray = generateRandomArray(6, 30);

function QuickSort(list: Array<number>) {
    if (list.length <= 1) return list;

    const lastItemIndex = list.length - 1;
    const pivot = list[lastItemIndex];

    let greaterThanList: Array<number> = []
    let lessThanList: Array<number> = []

    for (let i = 0; i < lastItemIndex; i++) {
        const item = list[i];
        if (item >= pivot) greaterThanList.push(item)
        if (item < pivot) lessThanList.push(item)

    }

    if (greaterThanList.length > 1) {
        greaterThanList = QuickSort(greaterThanList)
    }

    if (lessThanList.length > 1) {
        lessThanList = QuickSort(lessThanList)
    }

    return [...lessThanList, pivot, ...greaterThanList]
}

console.log('not sorted', randomArray)
console.log('sorted', QuickSort(randomArray))