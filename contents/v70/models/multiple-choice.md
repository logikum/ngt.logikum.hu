<!-- ======================================================================
--- Search engine
title:          Multiple choice
keywords:       multiple, choice
description:    Multiple choice component of NgTranslation module.
--- Menu system
order:          40
text:           Multiple choice
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /models
side-menu-header:   Data models
side-menu-top:      
side-menu-depth:    1
======================================================================= -->

# Multiple choice

The TranslatableMultipleChoice component is similar to TranslatableOptionList,
but it allows to select more than one item. Taking the example of the selection
list:

{{ components/multiple-choice/translation! }}

The TranslatableMultipleChoice class is used to handle the items:

{{ components/multiple-choice/code! }}

The key of the text node is _'app.fruits'_ again, and the fruit list is used
in the view:

{{ components/multiple-choice/view! }}

The TranslatableMultipleChoice component has following properties and methods:

{{ components/multiple-choice/usage! }}

The TranslatableMultipleChoice object will load the appropriate translation
texts when the user changes the current language.
