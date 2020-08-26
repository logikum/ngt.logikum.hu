```html
&lt;ng-container *translate="let t; <strong>let l = localize</strong>'"&gt;
  &lt;div&gt;{{ <strong>l.number</strong>( height ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.percent</strong>( rate ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.currency</strong>( [ price, 'EUR' ] ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.datetime</strong>( now ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
