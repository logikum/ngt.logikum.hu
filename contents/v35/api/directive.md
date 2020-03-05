<!-- ======================================================================
--- Search engine
title:          TranslateDirective
keywords:       TranslateDirective
description:    TranslateDirective.
--- Menu system
order:          50
text:           TranslateDirective
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

# TranslateDirective

Provides access to the translation service. Using as structural directive:

{{ api/translate-directive-1 }}

<dl>
  <dt>node: string</dt>
  <dd>The optional beginning of the text identifier for all calls.</dd>
  <dt>key: string</dt>
  <dd>The identifier of the text. If node is defined, then node and key are merged.</dd>
  <dt>values: object | Array&lt;string> | string | number | Boolean</dt>
  <dd>The optional value or values to interpolate into the localized text.</dd>
</dl>

Using as attribute directive:

{{ api/translate-directive-2 }}

<dl>
  <dt>translate: string</dt>
  <dd>The identifier of the text.</dd>
  <dt>translateParams: object | Array&lt;string> | string | number | Boolean</dt>
  <dd>The optional value or values to interpolate into the localized text.</dd>
</dl>
