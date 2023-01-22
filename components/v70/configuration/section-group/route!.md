```typescript
const routes: Routes = [
  ...
  {
    path: 'winter',
    loadChildren: () => import('./winter/winter.module').then(m => m.WinterModule),
    canLoad: [ LoadTranslationsGuard ],
    data: { translationGroup: 'frosty' }
  },
  ...
];
```
