```html
&lt;ng-container *ngFor="let fruit of fruits">
  &lt;label>
    &lt;input type="checkbox" name="period" [value]="fruit.value"
           [checked]="fruit.selected"
           (change)="fruitChange( $event )">
    {{ fruit.text }}
  &lt;/label>
&lt;/ng-container>
&lt;div>
  &lt;button (click)="fruits.selectAll()">{{ t( 'app.multiple.all' ) }}&lt;/button>
  &lt;button (click)="fruits.deselectAll()">{{ t( 'app.multiple.none' ) }}&lt;/button>
&lt;/div>
```
