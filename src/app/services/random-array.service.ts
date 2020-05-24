import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RandomArrayService {

  generateArray(size=100, min=0, max=1000) {
    let arr: {num: number, active: boolean}[] = [];
    let myNum: number;
    for (let i = 0; i < size; i++) {
      myNum = Math.floor(Math.random() * max + min);
      arr.push({num: myNum, active: false});
    }
    return arr;
  }

}
