import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RandomArrayService {

  generateArray(size=100, min=0, max=1000) {
    let arr: number[] = [];
    let num: number;
    for (let i = 0; i < size; i++) {
      num = Math.floor(Math.random() * max + min);
      arr.push(num);
    }
    return arr;
  }

}
