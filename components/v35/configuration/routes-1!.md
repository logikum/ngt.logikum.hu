```typescript
const routes: Routes = [
  {
    <strong>path: 'shakespeare'</strong>,
    loadChildren: './bookshelf/shakespeare.module#ShakespeareModule',
    canLoad: [ LoadTranslationsGuard ]
  }
];
```
