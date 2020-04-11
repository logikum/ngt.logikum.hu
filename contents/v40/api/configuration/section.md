<!-- ======================================================================
--- Search engine
title:          Section
keywords:       Section
description:    Section.
--- Menu system
order:          30
text:           Section
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

# Section

Represents the definition of a translation file.

{{ api/configuration/section }}

### name

The name of the translation file without the file extension.

### alias

An optional value used to refer to the translation items in the application
instead of the name.

### path

The path of the translation file when the default translationPath or the group
path are not applicable.

### format

The format of the translation file when it is different from the default value
and the group format.

### type

The type of the loader to download the translation file when it is different
from the default value and the group format.
