```typescript
...
  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList(
      this.translate, {
      'seasons.summer.name': 'summer',
      'index.seasons.autumn': 'fall',
      'seasons.winter.name': 'winter'
    } );
  }

  doSomething() {
    const summer: string = this.texts.^get( 'summer' )^^;
    const autumn: string = this.texts.^get( 'fall' )^^;
    const winter: string = this.texts.^get( 'winter' )^^;
    ...
  }
...
```
