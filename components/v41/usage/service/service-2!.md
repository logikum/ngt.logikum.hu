```typescript
ngOnInit() {
  const title: string = this.<strong>translate.get</strong>( 'app.home.title' );
  const promo: string = this.<strong>translate.get</strong>(
    'app.promotions.daily',
    { product: 'CPG34500', discount: 15 }
  );
  const news: object = this.<strong>translate.getGroup</strong>( 'app.news' );
}
```
