<!-- ======================================================================
--- Search engine
title:          Parameter interpolation
keywords:       parameter, interpolation
description:    Parameter interpolation.
--- Menu system
order:          60
text:           Parameter interpolation
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /translation
side-menu-header:   Translation
side-menu-top:      
side-menu-depth:    2
======================================================================= -->

# Parameter interpolation

If the parameter is an object, the translation service searches the names its
properties surrounded by double curly brackets. When it finds one, it will be
replaced by the value of the given property, e.g.:

{{ usage/interpolation/interpolation-1! }}

When the parameter is an array, the translation service searches the indeces
of the array items surrounded by double curly brackets:

{{ usage/interpolation/interpolation-2! }}

In case of the parameter being a string, number or Boolean, the search phrase
is always &#123;<span></span>&#123;0}}:

{{ usage/interpolation/interpolation-3! }}

See the [Localization](/documentation/localization) chapter to learn how to
localize the inserted values.
