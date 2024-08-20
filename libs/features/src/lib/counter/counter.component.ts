import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Observable } from 'rxjs';

import { CounterService, CounterQuery } from '@angular-monorepo/state';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnInit {
  count: Observable<number>;
  currentCount: number = 0;

  constructor(
    private counterQuery: CounterQuery, 
    private counterService: CounterService
  ) {
    this.count = this.counterQuery.selectCount$;
  }

  ngOnInit() {
    this.counterService.init().subscribe((val) => {
      this.currentCount = val.count;

    });
  }

  add() {
    this.counterService.add().subscribe();
  }

  subtract() {
    this.counterService.subtract().subscribe();
  }
}
