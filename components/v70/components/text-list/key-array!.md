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
    const autumn: string = this.texts.^get( 'seasons.autumn.name' )^^;
    const fall: string = this.texts.^get( 'autumn' )^^; // from index,seasons.autumn
    ...
  }
...
```
