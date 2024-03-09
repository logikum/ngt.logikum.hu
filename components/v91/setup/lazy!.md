```typescript
import { RouterModule, Routes } from '@angular/router';
^import { NgTranslationModule, loadTranslations } from '@logikum/ng-translation';^^

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    ^canMatch: [ loadTranslations ]^^,
    loadChildren: './lazy/lazy.module#LazyModule'
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
