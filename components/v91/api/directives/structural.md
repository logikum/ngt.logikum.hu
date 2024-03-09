```xhtml
&lt;ng-container ~*translate~~="let t; node: 'keyRoot'; let l = localize"&gt;
  &lt;p&gt{{ t( 'key', values? ) }}&lt;/p&gt
  &lt;p&gt{{ l.number( number, 'options' ) }}&lt;/p&gt
&lt;/ng-container&gt;
```
