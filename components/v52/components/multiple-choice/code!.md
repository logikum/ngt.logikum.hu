```typescript
@Component({ ... })
export class FruitComponent {

  fruits: <strong>TranslatableMultipleChoice</strong>;

  constructor(
    private translate: <strong>TranslationService</strong>
  ) {
    this.fruits = <strong>new TranslatableMultipleChoice( translate, 'app.fruits' )</strong>;
  }
  ...
  fruitChange(
    event: any
  ): void {
    this.fruits.setState( event.target.value, event.target.checked );
  }
}
```
