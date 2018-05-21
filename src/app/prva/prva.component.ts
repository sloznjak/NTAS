import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prva',
  templateUrl: './prva.component.html',
  styleUrls: [ './prva.component.css' ]
})
export class PrvaComponent implements OnInit {
  count = 5;
  table = [];

  constructor() {
  }

  ngOnInit() {
    this.craeteArray();
  }

  getRandomInt( min, max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  craeteArray() {
    this.table = [];
    const row = [];
    for (let i = 0; i < this.count; i++) {
      row.push(this.getRandomInt(1, 100));
    }

    this.table.push(row);
  }

  selectSort() {
    const arr = [...this.table[0]];
    this.table = [];
    this.table.push([...arr]);
    console.log(arr);

    for (let i = 0; i < this.count - 1; i++) {
      let min_idx = i;
      for (let j = i + 1; j < this.count; j++) {
        if (arr[ j ] < arr[ min_idx ]) {
          min_idx = j;
        }
      }

      if (min_idx !== i) {
        const temp = arr[ min_idx ];
        arr[ min_idx ] = arr[ i ];
        arr[ i ] = temp;

        console.log(arr);
        this.table.push([...arr]);
      }
    }
  }

  countDown() {
    if (this.count === 0) {
      return;
    }
    this.count--;
    this.craeteArray();
  }

  countUp() {
    if (this.count === 25) {
      return;
    }
    this.count++;
    this.craeteArray();
  }
}
