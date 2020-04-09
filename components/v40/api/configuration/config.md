```typescript
interface TranslationConfig {
  translationPath: string;
  translationFormat?: string;
  sections: Array&lt;string | Section | SectionGroup&gt;;
  defaultLanguage: string;
  disableWarnings?: boolean;
}
```
