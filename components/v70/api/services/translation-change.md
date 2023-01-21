```typescript
interface TranslatableOption {
  readonly context: 'app' | 'module' | 'language';
  readonly action: 'start' | 'finish';
  readonly data: string;
  readonly description: string;
}
```
