```typescript
// custom-translation-converter.ts
@Injectable()
export class CustomTranslationConverter implements TranslationConverter {

  convert(
    language: string,
    resource: Resource,
    translations: any
  ): object {

    switch (resource.format) {
      case 'format-name':
        return { "key": "text" };
      default:
        return translations;
    }
  }
}
```
