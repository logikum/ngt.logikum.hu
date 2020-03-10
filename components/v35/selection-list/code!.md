```typescript
@Component({ ... })
export class FruitComponent {

  fruits: <strong>TranslatableOptionList</strong>;

  constructor(
    private translate: <strong>TranslationService</strong>
  ) {
    this.fruits = <strong>new TranslatableOptionList( translate, 'app.fruits' )</strong>;
  }
  ...
}
```
