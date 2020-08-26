```typescript
// app.en.json
{
  "welcome": "Welcome, <strong>{{ name }}</strong>!"
}

// app.compoonent.html
&lt;div&gt;{{ 'app.welcome' | translate:<strong>{ name: 'John' }</strong> }}&lt;/div&gt;

// Output: Welcome, John!
```
