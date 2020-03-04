```html
<ng-container *translate="let t">
  <form>
    <label>{{ t( 'form.product.label' ) }}</label>
    <input type="text" name="product" placeholder="{{ t( 'form.product.hint' ) }}">
  </form>
</ng-container>
```
