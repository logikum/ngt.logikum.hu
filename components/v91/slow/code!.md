```typescript
// app-component.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  initialized = false;

  constructor(
    private  cdRef: ChangeDetectorRef,
    private translate: TranslationService
  ) {
    this.translate.statusChange.subscribe( this.ngtChanges.bind( this ) );
  }

  private ngtChanges(
    change: TranslationChange
  ): void {

    console.log( change.description );
    if (change.context === 'app' && change.action === 'finish') {
      this.initialized = true;
      this.cdRef.detectChanges();
    }
  }
}
```
