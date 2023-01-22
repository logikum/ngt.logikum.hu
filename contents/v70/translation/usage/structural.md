<!-- ======================================================================
--- Search engine
title:          Structural directive
keywords:       structural, directive
description:    Use structural directive in views.
--- Menu system
order:          20
text:           Structural directive
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

# Use structural directive in views

> Using a structural directive is the recommended way as it creates one
> subscription per template.

You can use the translate structural directive to get your translated texts:

{{ usage/structural/structural-1! }}

The parameters are optional. For example:

{{ usage/structural/structural-2! }}

Or with parameter:

{{ usage/structural/structural-3! }}

You can also specify paramaters in the component:

{{ usage/structural/param-1! }}
{{ usage/structural/param-2! }}

If the keys of the texts in the view mostly starts with the same path, they
can be shortened providing the beginning of the keys in the node property.
Exceptiona are marked with a starting slash ('/') character:

{{ usage/structural/node! }}

When you use HTML tags in the translation text:

{{ usage/structural/html-1! }}

It can be displayed using the innerHTML attribute:

{{ usage/structural/html-2! }}
