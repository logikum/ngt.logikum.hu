```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<strong>import { NgTranslationModule } from '@logikum/ng-translation';</strong>

@NgModule({
  imports: [
    BrowserModule,
    <strong>NgTranslationModule.forRoot( <em>configuration</em> )</strong>
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```
