<!-- ======================================================================
--- Search engine
title:          Text lists
keywords:       text, list
description:    Localization in ng-translation.
--- Menu system
order:          60
text:           Text lists
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

# Text lists

The TranslatableTextList class makes easy to handle several text items in
the controller code. For example you want to use these texts:

<table>
  <tr>
    <td>{{ text-list/translation-1-1! }}</td>
    <td>&nbsp;</td>
    <td>{{ text-list/translation-1-2! }}</td>
  </tr>
</table>

You can do it like that:

{{ text-list/code! }}

The key list can be a string, a string array or an object.

### Key list is string

In that case the text list will contain one item only, not very useful.
Anyway, it can be used like that:

{{ text-list/key-string! }}

However, when the key identifies a node in the translations, all items of the
node are returned. The items can be accessed using the property names:

{{ text-list/key-node! }}

### Key list is string array

Similar to the previous case, but several items can be fetched at a time:

{{ text-list/key-array! }}

### Key list is object

The most practical use case, as the object can be used to map the text keys
to shorter ones:

{{ text-list/key-object! }}

### Parameter interpolation

Parameters are allowed as usual, e.g.:

{{ text-list/translation-2! }}

And then:

{{ text-list/interpolation! }}
