```typescript
...
  doSomething() {
    ...
    this.fruits.<strong>selectedIndeces</strong> = [ 0, 2 ];
    this.fruits.<strong>selectedValues</strong> = [ 'apple', 'cherry' ];
    ...
    const count: number = this.fruits.<strong>selectedCount</strong>;
    const indeces: Array&lt;number> = this.fruits.<strong>selectedIndeces</strong>;
    const values: Array&lt;string> = this.fruits.<strong>selectedValues</strong>;
    const texts: Array&lt;string> = this.fruits.<strong>selectedTexts</strong>;
    const items: Array&lt;TranslatableOption> = this.fruits.<strong>selectedItems</strong>;
    ...
    this.fruits.<strong>setState</strong>( 'plum', true );
    this.fruits.<strong>selectAll</strong>();
    this.fruits.<strong>deselectAll</strong>();
    ...
  }
...
```
