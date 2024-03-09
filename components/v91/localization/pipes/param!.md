```html
&lt;div&gt;{{ height | ^toNumber:'maxfd=2'^^ }}&lt;/div&gt;
&lt;div&gt;{{ rate | ^toPercent:'minfd=1'^^ }}&lt;/div&gt;
&lt;div&gt;{{ [ price, 'EUR' ] | ^toCurrency:'minsd=2'^^ }}&lt;/div&gt;
&lt;div&gt;{{ now | ^toDatetime:'ds=medium;ts=medium'^^ }}&lt;/div&gt;
```
