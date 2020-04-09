<!-- ======================================================================
--- Search engine
title:          Resource
keywords:       Resource
description:    Resource.
--- Menu system
order:          20
text:           Resource
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

# Resource

Represents the runtime description of a translation file.

{{ api/interfaces/resource }}

### name

The name of the translation file without the file extension.

### alias

An optional value used to refer to the translation items in the application
instead of the name.

### path

The path of the translation file.

### format

The format of the translation file.

### type

The type of the loader used to download the translation file.

### inUse

Indicates whether the translation file has already been downloaded.
