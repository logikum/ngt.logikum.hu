```typescript
// app.module.ts
import { NGT_TRANSLATION_CONVERTER } from 'ng-translation';
import { CustomTranslationConverter } from './custom-translation-converter';

@NgModule({
  providers: [ {
    provide: NGT_TRANSLATION_CONVERTER,
    useClass: CustomTranslationConverter
  } ],
  ...
})
export class AppModule { }
```
