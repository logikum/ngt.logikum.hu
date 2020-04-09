<!-- ======================================================================
--- Search engine
title:          SectionGroup
keywords:       SectionGroup
description:    SectionGroup.
--- Menu system
order:          20
text:           SectionGroup
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

# SectionGroup

Represents the definition of a translation file.

{{ api/configuration/group }}

### group

The name of the translation file group, it typically is the route path.

### path

The path of the translation files when the default translationPath is not
applicable.

### format

The format of the translation files when it is different from the default value.

### type

The type of the loader used to download the translation file. The default value
is `json`.

### items

Defines the collection of translation files of the group. When a simple string
is used, it is the name of a translation file without the file extension.
