<!-- ======================================================================
--- Search engine
title:          ToDatetimePipe
keywords:       datetime, date, time, pipe, formatting
description:    ToDatetimePipe for date and time formatting.
--- Menu system
order:          60
text:           ToDatetimePipe
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

# ToDatetimePipe

Transforms a date value to a localized text of the date in the active language.

{{ api/pipes/to-datetime }}

<dl>
  <dt>
    value<span class="js-type">: Date | number | string</span>
  </dt>
  <dd>
    The value to convert to localized date-time string.
  </dd>
  <dt>
    options<span class="js-type">: string</span>
  </dt>
  <dd>
    An optional semicolon separated list of valid date-time localization parameters.
    See <a href="/documentation/localization/date-time">Date and time formatting</a>.
  </dd>
</dl>
