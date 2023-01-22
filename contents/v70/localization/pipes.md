<!-- ======================================================================
--- Search engine
title:          Localization pipes
keywords:       localization, pipes
description:    Localization pipes in NgTranslation.
--- Menu system
order:          80
text:           Localization pipes
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /localization
side-menu-header:   Localization
side-menu-top:      
side-menu-depth:    1
======================================================================= -->

# Localization pipes

The formatting rules can be applied by the following pipes in views:

{{ localization/pipes/basic! }}

The `toNumber`, `toPercent`, `toCcurrency` and `toDatetime` pipes can bes used
with parameters as well:

{{ localization/pipes/param! }}

The currency pipe has an alternate version `toCcy` that can be applied to a
number value. E.g. having the following model:

{{ localization/pipes/ccy-model! }}

The product price can be displayed in the following way:

{{ localization/pipes/ccy-basic! }}

The currency localization parameters can be added to the currency code by separated
a vertical bar (`|``) character:

{{ localization/pipes/ccy-param! }}
