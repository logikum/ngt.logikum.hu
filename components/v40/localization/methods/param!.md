```html
&lt;ng-container *translate="let t; <strong>let l = localize</strong>'"&gt;
  &lt;div&gt;{{ <strong>l.number</strong>( 1234567.1234567, 'maxfd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.percent</strong>( 12.34567, 'minfd=1' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.currency</strong>( [ 1234.567, 'EUR' ], 'minsd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.datetime</strong>( now, 'ds=medium;ts=medium' ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
