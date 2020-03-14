<!-- ======================================================================
--- Search engine
title:          TranslateService
keywords:       TranslateService
description:    TranslateService.
--- Menu system
order:          40
text:           TranslateService
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /api
side-menu-header:   API
side-menu-top:      
side-menu-depth:    1
======================================================================= -->

# TranslateService

Provides methods to access the translations.

{{ api/translate-service }}

### constructor()

Creates a new instance of the service.

<dl>
  <dt>http</dt>
  <dd>The HttpClient service.</dd>
</dl>

### activeLanguage

Gets the code of the current language.

### languageChanged

Having changed the active language emits the code of the current language.

### initializeApp()

Initializes the service and loads the translations of eager loaded modules for
the default and active languages.

<dl>
  <dt>config</dt>
  <dd>The translation configuration.</dd>
</dl>

<span class="code">Returns</span> a promise indicating whether the language
of the browser is supported.

### initializeSection()

Loads the translations of a lazy loaded module for all languages already in use.

<dl>
  <dt>route</dt>
  <dd>The route of a lazy loaded module.</dd>
</dl>

<span class="code">Returns</span> a promise indicating whether loading has succeeded.

### changeLanguage()

Sets the new active language and loads the translations of the language for
all loaded modules.

<dl>
  <dt>language</dt>
  <dd>The code of the new active language.</dd>
</dl>

<span class="code">Returns</span> a promise.

### get()

Gets the text identified by the key in the current language. If the text
contains placeholders for values, then they are replaced with the values
provided by the second argument.

<dl>
  <dt>key</dt>
  <dd>The key of the text to return.</dd>
  <dt>args</dt>
  <dd>That optional argument provides the eventual values to interpolate.</dd>
</dl>

<span class="code">Returns</span> the translated text.

### getGroup()

Gets the translation node identified by the key in the current language.

<dl>
  <dt>key</dt>
  <dd>The key of the translation node to return.</dd>
</dl>

<span class="code">Returns</span> an object containing translated texts.

### insert()

Replaces the placeholders in the translation text with the values provided by
the second argument.

<dl>
  <dt>key</dt>
  <dd>The key of the translation text.</dd>
  <dt>text</dt>
  <dd>The translation text.</dd>
  <dt>args</dt>
  <dd>That argument provides the eventual values to interpolate.</dd>
</dl>

<span class="code">Returns</span> the translated text.
