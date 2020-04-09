```typescript
interface SectionGroup {
  group: string;
  path?: string;
  format?: string;
  type?: 'json' | 'text' | 'blob' | 'arraybuffer';
  items: Array&lt;string | Section&gt;
}
```
