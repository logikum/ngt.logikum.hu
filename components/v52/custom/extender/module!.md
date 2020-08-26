```typescript
// app.module.ts
import { NGT_TRANSPILE_EXTENDER } from 'ng-translation';
import { CustomTranspileExtender } from './custom-transpile-extender';

@NgModule({
  providers: [ {
    provide: NGT_TRANSPILE_EXTENDER,
    useClass: CustomTranspileExtender
  } ],
  ...
})
export class AppModule { }
```
