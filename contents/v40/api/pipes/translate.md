<!-- ======================================================================
--- Search engine
title:          TranslatePipe
keywords:       TranslatePipe
description:    TranslatePipe.
--- Menu system
order:          10
text:           TranslatePipe
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

# TranslatePipe

Transforms a key string to a localized texts.

{{ api/pipes/translate }}

<dl>
  <dt>key: string</dt>
  <dd>The identifier of the text.</dd>
  <dt>values: object | Array&lt;string> | string | number | Boolean</dt>
  <dd>The optional value or values to interpolate into the localized text.</dd>
</dl>
