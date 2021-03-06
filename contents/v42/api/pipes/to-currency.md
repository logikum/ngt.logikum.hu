<!-- ======================================================================
--- Search engine
title:          ToCurrencyPipe
keywords:       currency, pipe, formatting
description:    ToCurrencyPipe for currency formatting.
--- Menu system
order:          40
text:           ToCurrencyPipe
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

# ToCurrencyPipe

Transforms a currency value to a localized text of the currency in the active language.

{{ api/pipes/to-currency }}

<dl>
  <dt>
    value<span class="js-type">: CurrencyValue</span>
  </dt>
  <dd>
    The value to convert to localized currency string.
  </dd>
  <dt>
    options<span class="js-type">: string</span>
  </dt>
  <dd>
    An optional semicolon separated list of valid currency localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>
