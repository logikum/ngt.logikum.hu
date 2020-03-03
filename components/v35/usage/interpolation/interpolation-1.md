```typescript
// app.en.json
{
  "welcome": "Welcome, <strong>{{ name }}</strong>!"
}

// app.compoonent.html
<div>{{ 'app.welcome' | translate:<strong>{ name: 'John' }</strong> }}</div>

// Output: Wlecome, John!
```
