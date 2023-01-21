```typescript
@Component({...})
export class ShopComponent {

  private texts: ^TranslatableTextList^^;

  constructor(
    private translate: ^TranslationService^^
  ) {
    this.texts = ^new TranslatableTextList( this.translate, ~keyList~~ )^^;
  }
  ...
}
```
