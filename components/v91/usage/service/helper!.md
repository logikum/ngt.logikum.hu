```typescript
helper(): void {
  const msg1 = `The product has ${ ^translate.number^^( 12345 ) } pieces on stock.`;
  const msg2 = `The ${ ^translate.percent^^( 0.1234 ) } of the products are damaged.`;
  const msg3 = `The product costs ${ ^translate.currency^^( [ 123.45, 'USD' ] ) }.`;
  const msg4 = `The product costs ${ ^translate.ccy^^( 123.45, 'USD' ) }.`;
  const msg5 = `The products arrived on ${ ^translate.datetime^^( Date.now() ) }.`;
}
```
