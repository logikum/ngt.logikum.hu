```typescript
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    ^canMatch: [ loadTranslations ]^^,
    loadChildren: './lazy/lazy.module#LazyModule',
    ^data: { sectionPrefix: 'laggard' }^^
  },
  { path: '**', redirectTo: 'home' }
];
```
