```typescript
&lt;ng-container *translate="let t; node: 'l10n'"&gt;
  &lt;div&gt;{{ t('default', Date.now()) }}&lt;/div&gt;
  &lt;div&gt;{{ t('short', Date.now()) }}&lt;/div&gt;
  &lt;div&gt;{{ t('medium', Date.now()) }}&lt;/div&gt;
  &lt;div&gt;{{ t('long', Date.now()) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
