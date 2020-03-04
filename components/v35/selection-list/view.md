```html
<select>
  <option *ngFor="let fruit of fruits"
          [value]="fruit.<strong>value</strong>"
          [selected]="fruit.<strong>selected</strong>">
    {{ fruit.<strong>text</strong> }}
  </option>
</select>
```
