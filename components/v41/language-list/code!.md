```typescript
@Component({ ... })
export class AppComponent implements OnInit {

  languages: TranslatableLanguageList;

  constructor(
    private translate: >TranslationService
  ) {
    this.languages = new TranslatableLanguageList( translate, 'app.languages' );
  }

  ngOnInit(): void {
    // Set the initial language.
    const s = this.translate.languageChanged
      .subscribe( language => {
        this.languages.selectedValue = language;
        s.unsubscribe();
      } );
  }

  changeLanguage(
    event: any
  ): void {
    this.languages.selectedValue = event.target.value;
  }
  ...
}
```
