```typescript
// app.en.json
{
  "welcome": "Welcome, <strong>{{ 0 }}</strong>!"
}

// app.compoonent.html
<div>{{ 'app.welcome' | translate:<strong>[ 'John' ]</strong> }}</div>

// Output: Welcome, John!
```
