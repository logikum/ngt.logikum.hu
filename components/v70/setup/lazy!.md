```typescript
import { RouterModule, Routes } from '@angular/router';
^import { NgTranslationModule, LoadTranslationsGuard } from '@logikum/ng-translation';^^

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
    ^canLoad: [ LoadTranslationsGuard ]^^
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    ^NgTranslationModule.forRoot( ~configuration~~ )^^
  ]
})
export class AppModule { }
```
