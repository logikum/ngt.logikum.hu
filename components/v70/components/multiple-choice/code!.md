```typescript
@Component({ ... })
export class FruitComponent {

  fruits: ^TranslatableMultipleChoice^^;

  constructor(
    private translate: ^TranslationService^^
  ) {
    this.fruits = ^new TranslatableMultipleChoice( translate, 'app.fruits' )^^;
  }
  ...
  fruitChange(
    event: any
  ): void {
    this.fruits.setState( event.target.value, event.target.checked );
  }
}
```
