```html
&lt;div&gt;{{ 1234567.1234567 | <strong>toNumber:'maxfd=2'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ 12.34567 | <strong>toPercent:'minfd=1'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ [ 1234.567, 'EUR' ] | <strong>toCurrency:'minsd=2'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ now | <strong>toDatetime:'ds=medium;ts=medium'</strong> }}&lt;/div&gt;
```
