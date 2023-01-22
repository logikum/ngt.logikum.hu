```typescript
ngOnInit() {
  const title: string = this.^translate.get^^( 'app.home.title' );
  const promo: string = this.^translate.get^^(
    'app.promotions.daily',
    { product: 'CPG34500', discount: 15 }
  );
  const news: object = this.^translate.getGroup^^( 'app.news' );
}
```
