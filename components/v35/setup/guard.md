```typescript
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SetupComponent },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
    <strong>canLoad: [ LoadTranslationsGuard ]</strong>,
    <strong>data: { sectionPrefix: 'laggard' }</strong>
  },
  { path: '**', redirectTo: 'home' }
];
```
