```html
&lt;div&gt;{{ height | <strong>toNumber:'maxfd=2'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ rate | <strong>toPercent:'minfd=1'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ [ price, 'EUR' ] | <strong>toCurrency:'minsd=2'</strong> }}&lt;/div&gt;
&lt;div&gt;{{ now | <strong>toDatetime:'ds=medium;ts=medium'</strong> }}&lt;/div&gt;
```
