```html
&lt;select&gt;
  &lt;option *ngFor="let fruit of fruits"
          [value]="fruit.^value^^"
          [selected]="fruit.^selected^^"&gt;
    {{ fruit.^text^^ }}
  &lt;/option&gt;
&lt;/select&gt;
```
