import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface Counter { 
   count: number;
}

export function createInitialState(): Counter {
  return { 
    count: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<Counter> {
  constructor() {
    super(createInitialState());
  }
}