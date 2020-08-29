```html
&lt;ng-container *translate="let t; <strong>let l = localize</strong>'"&gt;
  &lt;div&gt;{{ <strong>l.ccy</strong>( price, 'HUF' ) }}&lt;/div&gt;
  &lt;div&gt;{{ <strong>l.ccy</strong>( price, 'HUF', 'minfd=0;maxfd=0' ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
