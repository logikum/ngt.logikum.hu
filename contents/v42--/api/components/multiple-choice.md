<!-- ======================================================================
--- Search engine
title:          TranslatableMultipleChoice
keywords:       translatable, option, list, select, multiple
description:    TranslatableMultipleChoice to select multiple options.
--- Menu system
order:          30
text:           TranslatableMultipleChoice
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

# TranslatableMultipleChoice

Provides properties and methods to create a translatable select list to select
multiple option.

{{ api/components/multiple-choice }}

### constructor()

Creates a new instance of the select list.

<dl>
  <dt>translate</dt>
  <dd>The translation service.</dd>
  <dt>key</dt>
  <dd>The key of the text node that contains the keys and texts of the items.</dd>
</dl>

### selectedCount

Gets the count of the selected items.

### selectedIndeces

Gets or sets the indeces of the selected items.

### selectedValues

Gets or sets the values of the selected items.

### selectedTexts

Gets the translated texts of the selected items.

### selectedItems

Gets the selected items.

### setState()

<dl>
  <dt>value</dt>
  <dd>The value of the item to set.</dd>
  <dt>selected</dt>
  <dd>Indicates whether the item is selected or unselected.</dd>
</dl>

### selectAll()

Selects all items.

### deselectAll()

Deselects all items.

### next()

<span class="code">Returns</span> the next iterator result.

### \[Symbol.iterator]()

<span class="code">Returns</span> the iterator of the list.

