```typescript
@Component({...})
export class ShopComponent {

  private texts: <strong>TranslatableTextList</strong>;

  constructor(
    private translate: <strong>TranslationService</strong>
  ) {
    this.texts = <strong>new TranslatableTextList( this.translate, <em>keyList</em> )</strong>;
  }
  ...
}
```
