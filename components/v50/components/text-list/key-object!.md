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
    const summer: string = this.texts.<strong>get( 'summer' )</strong>;
    const autumn: string = this.texts.<strong>get( 'fall' )</strong>;
    const winter: string = this.texts.<strong>get( 'winter' )</strong>;
    ...
  }
...
```
