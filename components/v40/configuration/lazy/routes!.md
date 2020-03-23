```typescript
const routes: Routes = [
  ...
  { path: 'spring',
    loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule) },
  { path: 'summer',
    loadChildren: () => import('./summer/summer.module').then(m => m.SummerModule),
    canLoad: [ LoadTranslationsGuard ] },
  { path: 'autumn',
    loadChildren: () => import('./autumn/autumn.module').then(m => m.AutumnModule),
    canLoad: [ LoadTranslationsGuard ] },
  { path: 'winter',
    loadChildren: () => import('./winter/winter.module').then(m => m.WinterModule),
    canLoad: [ LoadTranslationsGuard ],
    data: { translationGroup: 'frosty' } },
  ...
];
```
