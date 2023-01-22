```html
&lt;ng-container *translate="let t; ^let l = localize^^'"&gt;
  &lt;div&gt;{{ ^l.number^^( height ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.percent^^( rate ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.currency^^( [ price, 'EUR' ] ) }}&lt;/div&gt;
  &lt;div&gt;{{ ^l.datetime^^( now ) }}&lt;/div&gt;
&lt;/ng-container&gt;
```
