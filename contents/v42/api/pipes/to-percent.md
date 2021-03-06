<!-- ======================================================================
--- Search engine
title:          ToPercentPipe
keywords:       percent, pipe, formatting
description:    ToPercentPipe for percent formatting.
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
  <dt>
    value<span class="js-type">: number</span>
  </dt>
  <dd>
    The value to convert to localized percent string.
  </dd>
  <dt>
    options<span class="js-type">: string</span>
  </dt>
  <dd>
    An optional semicolon separated list of valid percent localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>
