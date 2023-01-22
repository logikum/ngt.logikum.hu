<!-- ======================================================================
--- Search engine
title:          TranslatableLanguageList
keywords:       translatable, language, list
description:    TranslatableLanguageList for language selection.
--- Menu system
order:          20
text:           TranslatableLanguageList
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
side-menu-depth:    2
======================================================================= -->

# TranslatableLanguageList

Provides properties and methods to create a language selector.

{{ api/components/language-list }}

### constructor()

Creates a new instance of the language list.

<dl>
  <dt>translate</dt>
  <dd>The translation service.</dd>
  <dt>key</dt>
  <dd>The key of the text node that contains the keys and texts of the languages.</dd>
</dl>

### selectedIndex

Gets or sets the index of the selected language.

### selectedValue

Gets or sets the value of the selected language.

### selectedText

Gets the translated text of the selected language.

### selectedItem

Gets the selected language item.

### next()

<span class="code">Returns</span> the next iterator result.

### \[Symbol.iterator]()

<span class="code">Returns</span> the iterator of the list.

