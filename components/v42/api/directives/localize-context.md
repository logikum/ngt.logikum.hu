```typescript
interface LocalizeContext {
  number( value: number, options: string ): string;
  percent( value: number, options: string ): string;
  currency( value: CurrencyValue, options: string ): string;
  datetime( value: Date | number | string, options: string ): string;
}
```
