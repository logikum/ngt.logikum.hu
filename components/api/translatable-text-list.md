```typescript
class TranslatableTextList {
  constructor(
    translate: TranslationService,
    keyList: string | Array&lt;string&gt; | object
    )
  get(key: string, args?: any): string
}
```
