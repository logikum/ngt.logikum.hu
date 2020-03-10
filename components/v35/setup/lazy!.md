```typescript
import { RouterModule, Routes } from '@angular/router';
<strong>import { NgTranslationModule, LoadTranslationsGuard } from '@logikum/ng-translation';</strong>

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
    <strong>canLoad: [ LoadTranslationsGuard ]</strong>
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot( routes ),
    <strong>NgTranslationModule.forRoot( <em>configuration</em> )</strong>
  ]
})
export class AppModule { }
```
