<!-- ======================================================================
--- Search engine
title:          Translation files
keywords:       translations, files
description:    How to provide translation files.
--- Menu system
order:          10
text:           Translation files
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

# Translation files

The translation texts are stored in JSON files:

{{ usage/definition/translation-1! }}

The texts may contain placeholders for values to insert runtime. Double
curly brackets mark the placeholders in the text and are identified by
names or ordered indeces:

{{ usage/definition/placeholder! }}

See the __Parameter interpolation__ panel for more details.

The translation texts are referred in the Angular app by their keys. The key
consists of the name of the translation file and the name of the JSON property
separated by a dot. The texts in the above example can be referred by the
following keys:

{{ usage/definition/keys-1! }}

The JSON objects can be nested:

{{ usage/definition/translation-2! }}

In this case the keys will be:

{{ usage/definition/keys-2! }}

You can use an extended translation file names in similar way:

{{ usage/definition/translation-3! }}

Then the keys will be:

{{ usage/definition/keys-3! }}

The section prefixes of lazy loaded modules will not be part of the keys.

> Using a format other than JSON requires to create a
> [custom translation converter](/documentation/custom/converter).
