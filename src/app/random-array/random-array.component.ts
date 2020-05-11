import { Component, OnInit } from '@angular/core';
import { RandomArrayService } from '../services/random-array.service';
import { BubbleSortService } from '../services/bubble-sort.service';

@Component({
  selector: 'app-random-array',
  templateUrl: './random-array.component.html',
  styleUrls: ['./random-array.component.css']
})
export class RandomArrayComponent implements OnInit {
  randomArray: number[] = [];

  constructor(
    private randomArrayService: RandomArrayService,
    private bubbleSortService: BubbleSortService
  ) { }

  ngOnInit() {
    this.randomArray = this.randomArrayService.generateArray(10, 0, 100);
  }

  onBubbleSort() {
    const sorted = this.bubbleSortService.bubbleSort(this.randomArray);
    console.log(sorted);
    this.randomArray = sorted;
  }

}
