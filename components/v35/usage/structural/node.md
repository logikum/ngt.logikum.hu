```html
<ng-container *translate="let t; <strong>node: 'app.form'</strong>">
  <form>
    <label>{{ t( 'product.label' ) }}</label>
    <input type="text" name="product" placeholder="{{ t( 'product.hint' ) }}">
    <label>{{ t( 'price.label' ) }}</label>
    <input type="text" name="price" placeholder="{{ t( 'price.hint' ) }}">
    <button type="submit">{{ t( <strong>'/app.shared.button.submit'</strong> ) }}</button>
  </form>
</ng-container>
```
