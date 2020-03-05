<!-- ======================================================================
--- Search engine
title:          Define translations
keywords:       configuration
description:    Define translations.
--- Menu system
order:          10
text:           Define translations
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

# Define translations

The translation texts are stored in JSON files:

{{ usage/definition/!translation-1 }}

The texts may contain placeholders for values to insert runtime. Double
curly brackets mark the placeholders in the text and are identified by
names or ordered indeces:

{{ usage/definition/!placeholder }}

See the __Parameter interpolation__ panel for more details.

The translation texts are referred in the Angular app by their keys. The key
consists of the name of the translation file and the name of the JSON property
separated by a dot. The texts in the above example can be referred by the
following keys:

{{ usage/definition/keys-1 }}

The JSON objects can be nested:

{{ usage/definition/!translation-2 }}

In this case the keys will be:

{{ usage/definition/keys-2 }}

You can use an extended translation file names in similar way:

{{ usage/definition/translation-3 }}

Then the keys will be:

{{ usage/definition/keys-3 }}

The section prefixes of lazy loaded modules will not be part of the keys.
