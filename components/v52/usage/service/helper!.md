```typescript
helper(): void {
  const msg1 = `The product has ${ <strong>translate.number</strong>( 12345 ) } pieces on stock.`;
  const msg2 = `The ${ <strong>translate.percent</strong>( 0.1234 ) } of the products are damaged.`;
  const msg3 = `The product costs ${ <strong>translate.currency</strong>( [ 123.45, 'USD' ] ) }.`;
  const msg4 = `The product costs ${ <strong>translate.ccy</strong>( 123.45, 'USD' ) }.`;
  const msg5 = `The products arrived on ${ <strong>translate.datetime</strong>( Date.now() ) }.`;
}
```
