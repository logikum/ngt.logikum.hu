```typescript
const routes: Routes = [
  {
    path: 'shakespeare',
    loadChildren: './bookshelf/shakespeare.module#ShakespeareModule',
    canLoad: [ LoadTranslationsGuard ],
    <strong>data: { sectionPrefix: 'dramas' }</strong>
  }
];
```
