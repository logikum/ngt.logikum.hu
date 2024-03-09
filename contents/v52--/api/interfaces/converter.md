<!-- ======================================================================
--- Search engine
title:          TranslationConverter
keywords:       translation, converter, format, custom, interface
description:    TranslationConverter interface for custom format translation files.
--- Menu system
order:          10
text:           TranslationConverter
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

# TranslationConverter

This interface defines a method that a custom translation converter has to implement:

{{ api/interfaces/converter }}

### convert()

Converts the translations of custom format to a JavaScript object.

<dl>
  <dt>language</dt>
  <dd>The language of the translation items.</dd>
  <dt>resource</dt>
  <dd>The data of the translation file downloaded.</dd>
  <dt>translations</dt>
  <dd>The response data provided by the translation loader.</dd>
</dl>

<span class="code">Returns</span> an object that contains the translation items.
