```typescript
// app.en.json
{
  "welcome": "Welcome, ^{{ name }}^^!"
}

// app.compoonent.html
&lt;div&gt;{{ 'app.welcome' | translate:^{ name: 'John' }^^ }}&lt;/div&gt;

// Output: Welcome, John!
```
