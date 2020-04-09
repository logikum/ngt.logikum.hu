<!-- ======================================================================
--- Search engine
title:          TranspileExtender
keywords:       TranspileExtender
description:    TranspileExtender.
--- Menu system
order:          30
text:           TranspileExtender
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

# TranspileExtender

This interface defines a method that a custom transpile extender has to implement:

{{ api/interfaces/extender }}

### transpile()

Creates a localized string for the provided value.

<dl>
  <dt>format</dt>
  <dd>A name that identifies the format to apply.</dd>
  <dt>data</dt>
  <dd>The localization information for the parameter interpolation.</dd>
</dl>

<span class="code">Returns</span> the value formatted according to the active
language and the provided parameters.
