```typescript
// app.en.json
{
  "welcome": "Welcome, ^{{ 0 }}^^!"
}

// app.compoonent.html
&lt;div&gt;{{ 'app.welcome' | translate:^'John'^^ }}&lt;/div&gt;

// Output: Welcome, John!
```
