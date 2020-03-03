```typescript
class TranslationService {
  constructor(http: HttpClient)
  readonly activeLanguage: string
  languageChanged: EventEmitter<string>
  initializeApp(config: TranslationConfig): Promise<boolean>
  initializeSection(route: Route): Promise<boolean>
  changeLanguage(language: string): Promise<any>
  get(key: string, args?: any): string
  getGroup(key: string): object
  insert(key: string, text: string, args?: any): string
}
```
