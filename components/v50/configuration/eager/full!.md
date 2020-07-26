```typescript
const ngtConfig: TranslationConfig = {
  ...
  sections: {
    'app', 'shared',
    {
      name: 'ui-components',
      alias: 'ui',
      path: '/components/i18n/{ language }/{ section }.json'
    } 
  },
  ...
}
```
