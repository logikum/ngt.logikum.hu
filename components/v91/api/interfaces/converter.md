```typescript
interface TranslationConverter {
  convert(
    language: string,
    resource: Resource,
    translations: any
  ): object;
}
```
