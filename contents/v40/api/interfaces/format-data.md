<!-- ======================================================================
--- Search engine
title:          FormatData
keywords:       format, data, localization, interface
description:    FormatData interface to hold localization information.
--- Menu system
order:          40
text:           FormatData
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

# FormatData

Represents the localization information needed for parameter interpolation.

{{ api/interfaces/format-data }}

### key

The key of the translation item.

### locale

The code of the active language.

### params

The localization patameters for the current value.

### value

The value to insert formatted.
