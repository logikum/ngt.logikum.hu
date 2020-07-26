```html
&lt;select (change)="changeLanguage( $event )"&gt;
  &lt;option *ngFor="let language of languages"
          [value]="language.value"
          [selected]="language.selected"&gt;
    {{ language.text }}
  &lt;/option&gt;
&lt;/select&gt;
```
