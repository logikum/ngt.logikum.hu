```typescript
&lt;ng-container *translate="let t; node: 'l10n'"&gt;
  &lt;div&gt;{{ t('default', { price: [1234.567, 'EUR'] } }}&lt;/div&gt;
  &lt;div&gt;{{ t('code', [[1234.567, 'EUR']]) }}&lt;/div&gt;
  &lt;div&gt;{{ t('name', [[1234.567, 'EUR']]) }}&lt;/div&gt;
  &lt;div&gt;{{ t('symbol', [[1234.567, 'EUR']]) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
