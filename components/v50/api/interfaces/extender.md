```typescript
interface TranspileExtender {
  transpile(
    format: string,
    data: FormatData
  ): string | undefined;
}
```
