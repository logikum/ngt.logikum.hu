```typescript
const ngtConfig: TranslationConfig = {
  ...
  sections: {
    'app', 'shared', 'spring',
    { group: 'summer', items: [ 'summer' ] },
    { group: 'autumn', items: [ { name: 'fall', alias: 'autumn' } ] },
    { group: 'frosty', items: [ 'december', 'january', 'february' ],
        path: '/assets/i18n/months/{section}.{language}.po' }
  },
  ...
}
```
