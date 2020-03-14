```typescript
...
  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList( this.translate, 'seasons.spring.name' );
  }

  doSomething() {
    const spring: string = this.texts.<strong>get( 'seasons.spring.name' )</strong>;
    ...
  }
...
```
