```html
&lt;ng-container *translate="let t; ^node: 'app.form'^^"&gt;
  &lt;form&gt;
    &lt;label&gt;{{ t( 'product.label' ) }}&lt;/label&gt;
    &lt;input type="text" name="product" placeholder="{{ t( 'product.hint' ) }}"&gt;
    &lt;label&gt;{{ t( 'price.label' ) }}&lt;/label&gt;
    &lt;input type="text" name="price" placeholder="{{ t( 'price.hint' ) }}"&gt;
    &lt;button type="submit"&gt;{{ t( ^'/app.shared.button.submit'^^ ) }}&lt;/button&gt;
  &lt;/form&gt;
&lt;/ng-container&gt;
```
