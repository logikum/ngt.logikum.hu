```html
&lt;ng-container *translate="let t; ^let l = localize^^'"&gt;
  &lt;div&gt;{{ ^l.number^^( height, 'maxfd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.percent^^( rate, 'minfd=1' ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.currency^^( [ price, 'EUR' ], 'minsd=2' ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.datetime^^( now, '-' ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
