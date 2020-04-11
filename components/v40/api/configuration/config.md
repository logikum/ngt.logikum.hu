```typescript
interface TranslationConfig {
  translationPath: string;
  translationFormat?: string;
  loaderType?: LoaderType;
  sections: Array&lt; string | Section | SectionGroup &gt;;
  defaultLanguage: string;
  disableWarnings?: boolean;
}
```
