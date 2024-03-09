```typescript
const routes: Routes = [
  ...
  { path: 'spring',
    loadChildren: () => import('./spring/spring.module').then(m => m.SpringModule) }
  { path: 'summer',
    canMatch: [ loadTranslations ],  
    loadChildren: () => import('./summer/summer.module').then(m => m.SummerModule) },
  { path: 'autumn',
    canMatch: [ loadTranslations ],
    loadChildren: () => import('./autumn/autumn.module').then(m => m.AutumnModule) },
  { path: 'winter',
    canMatch: [ loadTranslations ],
    loadChildren: () => import('./winter/winter.module').then(m => m.WinterModule),
    data: { translationGroup: 'frosty' } },
  ...
];
```
