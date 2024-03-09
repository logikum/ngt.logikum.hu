```typescript
@Component({ ... })
export class FruitComponent {

  fruits: ^TranslatableOptionList^^;

  constructor(
    private translate: ^TranslationService^^
  ) {
    this.fruits = ^new TranslatableOptionList( translate, 'app.fruits' )^^;
  }
  ...
}
```
