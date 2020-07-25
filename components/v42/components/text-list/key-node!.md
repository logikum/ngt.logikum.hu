```typescript
...
  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList( this.translate, 'index.seasons' );
  }

  doSomething() {
    const summer: string = this.texts.<strong>get( 'summer' )</strong>;
    const winter: string = this.texts.<strong>get( 'winter' )</strong>;
    ...
  }
...
```
