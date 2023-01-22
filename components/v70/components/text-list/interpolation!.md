```typescript
@Component({...})
export class ShopComponent {

  private texts: TranslatableTextList;

  constructor(
    private translate: TranslationService
  ) {
    this.texts = new TranslatableTextList(
      this.translate,
      {
        'app.shop.offer': 'offer',
        'app.shop.special': 'special',
        'app.shop.sale': 'lasts'
      }
    );
  }

  doSomething() {
    const dailyOffer: string = this.texts.^get( 'offer', { buy: 3, pay: 2 } )^^;
    const specialOffer: string = this.texts.^get( 'special', [ 'Jackie Chan', 20 ] )^^;
    const specialLasts: string = this.texts.^get( 'lasts', 4 )^^;
    ...
  }
}
```
