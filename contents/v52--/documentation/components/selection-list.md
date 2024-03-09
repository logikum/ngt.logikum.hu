<!-- ======================================================================
--- Search engine
title:          Selection lists
keywords:       selection, list
description:    Selection list component of NgTranslation module.
--- Menu system
order:          10
text:           Selection lists
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

# Selection lists

The translation of the texts of a selection list is a frequent task. The
TranslatableOptionList class provides a way to do that easily. Let us assume
that we want to create a list of fruits. The names of the fruits are stored
in JSON files:

{{ components/selection-list/translation! }}

The TranslatableOptionList class provides the list items in an easy way:

{{ components/selection-list/code! }}

Here _'app.fruits'_ is the key of the text node. Thereafter the fruit
list can be used in the view:

{{ components/selection-list/view! }}

The following properties are available:

{{ components/selection-list/properties! }}

The TranslatableOptionList object will load the appropriate translation texts
when the user changes the current language.
