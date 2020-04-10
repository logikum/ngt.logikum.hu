<!-- ======================================================================
--- Search engine
title:          ToNumberPipe
keywords:       ToNumberPipe
description:    ToNumberPipe.
--- Menu system
order:          20
text:           ToNumberPipe
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

# ToNumberPipe

Transforms a number value to a localized text of the number in the active language.

{{ api/pipes/to-number }}

<dl>
  <dt>
    value<span class="js-type">: number</span>
  </dt>
  <dd>
    The value to convert to localized number string.
  </dd>
  <dt>
    options<span class="js-type">: string</span>
  </dt>
  <dd>
    An optional semicolon separated list of valid number localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>
