```typescript
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
    ^canLoad: [ LoadTranslationsGuard ]^^,
    ^data: { sectionPrefix: 'laggard' }^^
  },
  { path: '**', redirectTo: 'home' }
];
```
