<!-- ======================================================================
--- Search engine
title:          Transpile extenders
keywords:       custom, transpile, extender
description:    How to add custom transpile extenders to NgTranslation.
--- Menu system
order:          20
text:           Transpile extenders
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /documentation
side-menu-header:   Documentation
side-menu-top:      
side-menu-depth:    2
======================================================================= -->

# Transpile extenders

If needed the localization formats can be extended with new ones. The custom
function must be defined in the module using `NGT_TRANSPILE_EXTENDER` token: 

{{ custom/extender/module! }}

The function has to implement the `TranspileExtender` interface. The new formats
can defined in the `transpile()` method: 

{{ custom/extender/extender! }}

The following example defines the Roman number format:

{{ custom/extender/roman! }}
