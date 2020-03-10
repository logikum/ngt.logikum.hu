```typescript
// app.en.json
{
  "welcome": "Welcome, <strong>{{ 0 }}</strong>!"
}

// app.compoonent.html
&lt;div&gt;{{ 'app.welcome' | translate:<strong>[ 'John' ]</strong> }}&lt;/div&gt;

// Output: Welcome, John!
```
