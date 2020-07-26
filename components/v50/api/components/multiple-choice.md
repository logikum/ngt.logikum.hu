```typescript
class TranslatableOptionList {
  constructor( translate: TranslationService, key: string );
  readonly selectedCount: number;
  selectedIndeces: Array&lt; number &gt;;
  selectedValues: Array&lt; string &gt;;
  readonly selectedTexts: Array&lt; string &gt;;
  readonly selectedItem: Array&lt; TranslatableOption &gt;;
  setState( value: string, selected: boolean ): void;
  selectAll(): void;
  deselectAll(): void;
  next(): IteratorResult&lt; TranslatableOption &gt;;
  [Symbol.iterator](): IterableIterator&lt; TranslatableOption &gt;;
}
```
