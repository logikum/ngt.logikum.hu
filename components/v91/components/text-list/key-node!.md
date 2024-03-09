```typescript
...
  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList( this.translate, 'index.seasons' );
  }

  doSomething() {
    const summer: string = this.texts.^get( 'summer' )^^;
    const winter: string = this.texts.^get( 'winter' )^^;
    ...
  }
...
```
