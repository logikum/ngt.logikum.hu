```typescript
class LoadTranslationsGuard {
  constructor( translationService: TranslationService ): void;
  canLoad( route: Route ): Promise&lt; boolean &gt;;
}
```
