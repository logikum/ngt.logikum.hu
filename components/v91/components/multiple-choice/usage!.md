```typescript
...
  doSomething() {
    ...
    this.fruits.^selectedIndeces^^ = [ 0, 2 ];
    this.fruits.^selectedValues^^ = [ 'apple', 'cherry' ];
    ...
    const count: number = this.fruits.^selectedCount^^;
    const indeces: Array&lt;number> = this.fruits.^selectedIndeces^^;
    const values: Array&lt;string> = this.fruits.^selectedValues^^;
    const texts: Array&lt;string> = this.fruits.^selectedTexts^^;
    const items: Array&lt;TranslatableOption> = this.fruits.^selectedItems^^;
    ...
    this.fruits.^setState^^( 'plum', true );
    this.fruits.^selectAll^^();
    this.fruits.^deselectAll^^();
    ...
  }
...
```
