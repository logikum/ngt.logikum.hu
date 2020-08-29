<!-- ======================================================================
--- Search engine
title:          ToCcyPipe
keywords:       currency, pipe, formatting
description:    ToCcyPipe for currency formatting.
--- Menu system
order:          50
text:           ToCcyPipe
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

# ToCcyPipe

Transforms a number to a localized text of the currency value in the active language.
An alternate pipe of ToCurrencyPipe, it can be used with number values instead of
[CurrencyValue](/api/directives/currency-value).

{{ api/pipes/to-ccy }}

<dl>
  <dt>
    value<span class="js-type">: number</span>
  </dt>
  <dd>
    The value to convert to localized currency string.
  </dd>
  <dt>
    options<span class="js-type">: string</span>
  </dt>
  <dd>
    The mandatory options have to contain at least the currency code. The eventual
    currency localization parameters are added after the currency code, separated
    by a vertical bar (`|`) character. See 
    <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>
