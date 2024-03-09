```typescript
interface TranslationConfig {
  translationPath: string;
  translationFormat?: string;
  loaderType?: LoaderType;
  sections: Array&lt; string | Section | SectionGroup &gt;;
  defaultLanguage: string;
  allowedLanguages?: Array&lt; string &gt;;
  disableWarnings?: boolean;
  currencyDefaultOptions?: object;
  filenameToCamelCase?: boolean;
}
```
