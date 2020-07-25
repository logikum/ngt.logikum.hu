<!-- ======================================================================
--- Search engine
title:          TranslatableOptionList
keywords:       translatable, option, list, select
description:    TranslatableOptionList for selections.
--- Menu system
order:          10
text:           TranslatableOptionList
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

# TranslatableOptionList

Provides properties and methods to create a translatable select list.

{{ api/components/option-list }}

### constructor()

Creates a new instance of the select list.

<dl>
  <dt>translate</dt>
  <dd>The translation service.</dd>
  <dt>key</dt>
  <dd>The key of the text node that contains the keys and texts of the items.</dd>
</dl>

### selectedIndex

Gets or sets the index of the selected item.

### selectedValue

Gets or sets the value of the selected item.

### selectedText

Gets the translated text of the selected item.

### selectedItem

Gets the selected item.

### next()

<span class="code">Returns</span> the next iterator result.

### \[Symbol.iterator]()

<span class="code">Returns</span> the iterator of the list.

