```html
<ng-container *translate="let t; node: 'l10n'">
  <div>{{ t('default', Date.now()) }}</div>
  <div>{{ t('short', Date.now()) }}</div>
  <div>{{ t('medium', Date.now()) }}</div>
  <div>{{ t('long', Date.now()) }}</div>
</ng-container>
```
