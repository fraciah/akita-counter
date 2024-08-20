import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Route[] = [
    {
        path : '',
        loadChildren: () => import('@angular-monorepo/features').then(m => m.CounterModule)
    }
];

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {
        preloadingStrategy: PreloadAllModules,
        initialNavigation: 'enabledBlocking',
        enableTracing: true
      })
    ],
    exports: [RouterModule]
  })

export class AppRoutingModule {}