import { Component, OnInit } from '@angular/core';
import { RandomArrayService } from '../services/random-array.service';
import { BubbleSortService } from '../services/bubble-sort.service';

@Component({
  selector: 'app-random-array',
  templateUrl: './random-array.component.html',
  styleUrls: ['./random-array.component.css']
})
export class RandomArrayComponent implements OnInit {
  randomArray: {num: number, active: boolean}[] = [];
  endIndex: number;
  currentIndex: number;

  constructor(
    private randomArrayService: RandomArrayService,
    private bubbleSortService: BubbleSortService
  ) { }

  ngOnInit() {
    this.randomArray = this.randomArrayService.generateArray(10, 0, 100);
    this.endIndex = this.randomArray.length - 1;
    this.currentIndex = 1;
  }

  onBubbleSort() {
    // const sorted = this.bubbleSortService.bubbleSort(this.randomArray);
    // console.log(sorted);
    // this.randomArray = sorted;
  }

  onStep() {
    let arr = this.randomArray;
    let j = this.currentIndex;
    arr[j].active = true;
    arr[j - 1].active = true;

    setTimeout(() => {
      if (arr[j].num < arr[j - 1].num) {
          let temp = arr[j];
          arr[j] = arr[j - 1];
          arr [j - 1] = temp;
      }
    }, 500);

    setTimeout(() => {
      arr[j].active = false;
      arr[j - 1].active = false;
    }, 1000);

    this.currentIndex++;
    if (this.currentIndex > this.endIndex) {
      this.currentIndex = 1;
      this.endIndex--;
    }

  }

}
