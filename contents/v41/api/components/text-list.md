<!-- ======================================================================
--- Search engine
title:          TranslatableTextList
keywords:       translatable, text, list, code
description:    TranslatableTextList for translations in code.
--- Menu system
order:          40
text:           TranslatableTextList
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

# TranslatableTextList

Provides methods to retrieve a bunch of texts to use in code.

{{ api/components/text-list }}

### constructor()

Creates a new instance of the text list.

<dl>
  <dt>translate</dt>
  <dd>The translation service.</dd>
  <dt>keyList</dt>
  <dd>Defines the keys of the texts to retrieve.</dd>
</dl>

### get()

Returns the text identified by the key in the current language. If the text
contains placeholders for values, then they are replaced with the values
provided by the second argument.

<dl>
  <dt>key</dt>
  <dd>The key of the text to return.</dd>
  <dt>args</dt>
  <dd>That optional argument provides the eventual values to interpolate.</dd>
</dl>
<span class="code">Returns</span> the translated text.
