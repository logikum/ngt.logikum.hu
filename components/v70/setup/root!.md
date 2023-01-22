```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
^import { NgTranslationModule } from '@logikum/ng-translation';^^

@NgModule({
  imports: [
    BrowserModule,
    ^NgTranslationModule.forRoot( ~configuration~~ )^^
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```
