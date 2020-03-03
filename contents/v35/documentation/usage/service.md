<!-- ======================================================================
--- Search engine
title:          Use service in components
keywords:       service
description:    Use service in components.
--- Menu system
order:          50
text:           Use service in components
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
side-menu-top:      Installation
side-menu-depth:    2
======================================================================= -->

# Use service in components

Instantiate the translation service in the component:

{{ usage/service/service-1 }}

Then you can get the translation texts:

{{ usage/service/service-2 }}

ou must get the translation texts again after the current language has changed.
Another solution is to use the TranslatableTextList or TranslatableOptionList
classes to manage the translations because they update their texts automatically.
