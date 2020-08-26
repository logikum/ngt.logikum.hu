```typescript
// custom-transpile-extender.ts
@Injectable()
export class CustomTranspileExtender implements TranspileExtender {

  transpile(
    format: string,
    data: FormatData
  ): string | undefined {

    switch (format) {
      case 'format-name':
        return 'result string';
      default:
        return undefined;
    }
  }
}
```
