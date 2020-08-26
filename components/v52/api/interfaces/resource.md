```typescript
interface Resource {
  name: string;
  alias: string;
  path: string;
  format: string;
  type: 'json' | 'text' | 'blob' | 'arraybuffer';
  inUse: boolean;
}
```
