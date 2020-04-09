<!-- ======================================================================
--- Search engine
title:          ToPercentPipe
keywords:       ToPercentPipe
description:    ToPercentPipe.
--- Menu system
order:          30
text:           ToPercentPipe
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

# ToPercentPipe

Transforms a number value to a localized text of percent in the active language.

{{ api/pipes/to-percent }}

<dl>
  <dt>value: number</dt>
  <dd>The value to convert to localized percent string.</dd>
  <dt>options: string</dt>
  <dd>An optional semicolon separated list of valid percent localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>
