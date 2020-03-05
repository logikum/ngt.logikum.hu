<!-- ======================================================================
--- Search engine
title:          LoadTranslationsGuard
keywords:       LoadTranslationsGuard
description:    LoadTranslationsGuard.
--- Menu system
order:          30
text:           LoadTranslationsGuard
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
side-menu-top:      API
side-menu-depth:    1
======================================================================= -->

# LoadTranslationsGuard

Loads the translations for a lazy loaded module before loading the module itself.

{{ api/load-translation-guard }}

### constructor()

Creates a new instance of the guard.

<dl>
  <dt>translationService</dt>
  <dd>The translation service.</dd>
</dl>

### canLoad()

Loads the translations of a lazy loaded module for all languages already in use.

<dl>
  <dt>route</dt>
  <dd>The route of the lazy loaded module to load.</dd>
</dl>

<span class="code">Returns</span> a promise indicating whether loading has succeeded.
