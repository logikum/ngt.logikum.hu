```html
&lt;ng-container *translate="let t; <strong>let l = localize</strong>'"&gt;
  &lt;div&gt;{{ <strong>l.number</strong>( height, 'maxfd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.percent</strong>( rate, 'minfd=1' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.currency</strong>( [ price, 'EUR' ], 'minsd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.datetime</strong>( now, '-' ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
