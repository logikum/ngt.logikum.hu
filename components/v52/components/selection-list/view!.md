```html
&lt;select&gt;
  &lt;option *ngFor="let fruit of fruits"
          [value]="fruit.<strong>value</strong>"
          [selected]="fruit.<strong>selected</strong>"&gt;
    {{ fruit.<strong>text</strong> }}
  &lt;/option&gt;
&lt;/select&gt;
```
