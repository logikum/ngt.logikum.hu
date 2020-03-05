```html
<ng-container *translate="let t; node: 'l10n'">
  <div>{{ t('default', { price: [1234.567, 'EUR'] } }}</div>
  <div>{{ t('code', [[1234.567, 'EUR']]) }}</div>
  <div>{{ t('name', [[1234.567, 'EUR']]) }}</div>
  <div>{{ t('symbol', [[1234.567, 'EUR']]) }}</div>
</ng-container>
```
