<!-- ======================================================================
--- Search engine
title:          LocalizeContext
keywords:       localize, context, parameter
description:    LocalizeContext for parameter localization
--- Menu system
order:          10
text:           LocalizeContext
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

# LocalizeContext

This interface defines methods to convert values to localized strings.

{{ api/directives/localize-context }}

### number()

Transforms a number value to a localized text of the number in the active language.

<dl>
  <dt>value</dt>
  <dd>The value to convert to localized number string.</dd>
  <dt>options</dt>
  <dd>An optional semicolon separated list of valid number localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>

<span class="code">Returns</span> the localized number string.

### percent()

Transforms a number value to a localized text of percent in the active language.

<dl>
  <dt>value</dt>
  <dd>The value to convert to localized percent string.</dd>
  <dt>options</dt>
  <dd>An optional semicolon separated list of valid percent localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>

<span class="code">Returns</span> the localized percent string.

### currency()

Transforms a currency value to a localized text of the currency in the active language.

<dl>
  <dt>value</dt>
  <dd>The value to convert to localized currency string.</dd>
  <dt>options</dt>
  <dd>An optional semicolon separated list of valid currency localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>

<span class="code">Returns</span> the localized currency string.

### ccy()

Transforms a number and a currency code to a localized text of the currency in the active language.

<dl>
  <dt>value</dt>
  <dd>The value to convert to localized currency string.</dd>
  <dt>currencyCode</dt>
  <dd>The currency code used in the conversion.</dd>
  <dt>options</dt>
  <dd>An optional semicolon separated list of valid currency localization parameters.
    See <a href="/documentation/localization/options">Number, percent and currency options</a>.
  </dd>
</dl>

<span class="code">Returns</span> the localized currency string.

### datetime()

Transforms a date value to a localized text of the date in the active language.

<dl>
  <dt>value</dt>
  <dd>The value to convert to localized date-time string.</dd>
  <dt>options</dt>
  <dd>An optional semicolon separated list of valid date-time localization parameters.
    See <a href="/documentation/localization/date-time">Date and time formatting</a>.
  </dd>
</dl>

<span class="code">Returns</span> the localized date-time string.
