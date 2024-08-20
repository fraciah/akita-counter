import { Route, RouterModule } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { NgModule } from '@angular/core';

export const COUNT_ROUTES: Route[] = [
	{
		path: '',
		component: CounterComponent,
		pathMatch: 'full',
	}
];

@NgModule({
	imports: [RouterModule.forChild(COUNT_ROUTES)],
	exports: [RouterModule]
})

export class CountRoutes { }