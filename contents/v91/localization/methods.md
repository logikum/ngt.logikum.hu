<!-- ======================================================================
--- Search engine
title:          Localization methods
keywords:       localization, methods
description:    Localization methods in NgTranslation.
--- Menu system
order:          90
text:           Localization methods
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

# Localization methods

The formatting rules can be also applied by the localization methods in views:

{{ localization/methods/basic! }}

The `number()`, `percent()`, `currency()` and `datetime()` methods have the
same parameters:

{{ localization/methods/param! }}

The currency method has an alternate version `ccy` that accepts separate value
and currency code:

{{ localization/methods/ccy! }}
