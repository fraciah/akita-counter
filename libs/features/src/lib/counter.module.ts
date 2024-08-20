import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountRoutes } from './counter.router';
import { CounterComponent } from './counter/counter.component';
import { CounterQuery, CounterStore } from '@angular-monorepo/state';

@NgModule({
  imports: [CommonModule, CountRoutes],
  declarations: [CounterComponent],
  providers: [
    CounterStore,
    CounterQuery,
  ],
})
export class CounterModule {}