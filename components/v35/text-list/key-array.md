```typescript
...
  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList(
      this.translate, [
      'seasons.summer.name',
      'seasons.autumn.name',
      'seasons.winter.name',
      'index.seasons'
    ] );
  }

  doSomething() {
    const autumn: string = this.texts.<strong>get( 'seasons.autumn.name' )</strong>;
    const fall: string = this.texts.<strong>get( 'autumn' )</strong>; // from index,seasons.autumn
    ...
  }
...
```
