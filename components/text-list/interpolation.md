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
    const dailyOffer: string = this.texts.<strong>get( 'offer', { buy: 3, pay: 2 } )</strong>;
    const specialOffer: string = this.texts.<strong>get( 'special', [ 'Jackie Chan', 20 ] )</strong>;
    const specialLasts: string = this.texts.<strong>get( 'lasts', 4 )</strong>;
    ...
  }
}
