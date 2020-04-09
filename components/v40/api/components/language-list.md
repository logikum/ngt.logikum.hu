```typescript
class TranslatableLanguageList {
  constructor(translate: TranslationService, key: string)
  selectedIndex: number
  selectedValue: string
  readonly selectedText: string
  readonly selectedItem: TranslatableOption
  next(): IteratorResult&ly;TranslatableOption&gt;
  [Symbol.iterator](): IterableIterator&lt;TranslatableOption&gt;
}
```
