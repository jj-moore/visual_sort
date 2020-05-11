import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BubbleSortService {

  bubbleSort(arr: number[]) {
    let swaps: boolean = true;
    for (let i = arr.length; i > 0 && swaps; i--) {
      swaps = false;
      for (let j = 1; j < i; j++) {
        if (arr[j] < arr[j - 1]) {
            swaps = true;
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr [j - 1] = temp;
        }
      }
    }
    return arr;
  }
}
