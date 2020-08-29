```typescript
class TranslationService {
  constructor( http: HttpClient );
  readonly activeLanguage: string;
  readonly isDownloading: boolean;
  readonly languageChanged: EventEmitter&lt; string &gt;;
  readonly statusChange: EventEmitter&lt; TranslationChange &gt;;
  initializeApp( config: TranslationConfig ): Promise&lt; boolean &gt;;
  initializeSection( route: Route ): Promise&lt; boolean &gt;;
  changeLanguage( language: string ): Promise&lt; any &gt;;
  get( key: string, args?: any ): string;
  getGroup( key: string ): object;
  insert( key: string, text: string, args?: any ): string;
  // localization helper methods:
  number( value: number, options: string ): string;
  percent( value: number, options: string ): string;
  currency( value: CurrencyValue, options: string ): string;
  ccy( value: number, currencyCode: string, options: string ): string;
  datetime( value: Date | number | string, options: string ): string;
}
```
