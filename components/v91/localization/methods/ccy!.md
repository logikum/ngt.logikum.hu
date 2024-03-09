```html
&lt;ng-container *translate="let t; ^let l = localize^^'"&gt;
  &lt;div&gt;{{ ^l.ccy^^( price, 'HUF' ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.ccy^^( price, 'HUF', 'minfd=0;maxfd=0' ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
