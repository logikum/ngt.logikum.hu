<!-- ======================================================================
--- Search engine
title:          Use pipe in views
keywords:       configuration
description:    Use pipe in views.
--- Menu system
order:          30
text:           Pipe
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

# Use pipe in views

You can use the translate pipe to get your translation values:

{{ usage/pipe/pipe-1! }}

The parameters are optional. For example:

{{ usage/pipe/pipe-2! }}

Or with parameter:

{{ usage/pipe/pipe-3! }}

You can also specify the paramaters in the component:

{{ usage/pipe/param-1! }}
{{ usage/pipe/param-2! }}

When you use HTML tags in the translation text:

{{ usage/pipe/html-1! }}

It can be displayed using the innerHTML attribute:

{{ usage/pipe/html-2! }}
