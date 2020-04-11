<!-- ======================================================================
--- Search engine
title:          Configuration section group
keywords:       configuration, section group
description:    The definition of translation section groups.
--- Menu system
order:          20
text:           Section groups
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

# Section groups

A section group defines the translation file of a lazy loaded module.
The following JSON object is an example section group:

{{ configuration/section-group/full! }}

The section group has these properties:

<dl>
  <dt>group: <span class="data-type">string</span></dt>
  <dd>The name of the translation file collection. It must be equal to the route,
      otherwise the group name has to be specifed in the route definition.
      Se below.</dd>
  <dt>path: <span class="data-type">string</span></dt>
  <dd>An optional path template of the translation files when it does not match
      the default template.</dd>
  <dt>format: <span class="data-type">string</span></dt>
  <dd>An optional value that defines the translation format of the group. It is
      used for custom format converters.</dd>
  <dt>type: <span class="data-type">LoaderType</span></dt>
  <dd>The type of the returned results expected by the downloader. The possible
      values are: <code>'json'</code>, <code>'text'</code>, <code>'blob'</code> and
       <code>'arraybuffer'</code>. The default value is <code>'json'</code>. This
       parameter also is used for custom format converters.</dd>
  <dt>items: <span class="data-type">Array&lt; string | Section &gt;</span></dt>
  <dd>The list of the translation files. Each file is represented by a section
      definition, or a string in simple cases</dd>
</dl>

A section group usually looks like that:

{{ configuration/section-group/simple! }}

The translation group can be defined in the route when the route path differs
from group name passing the name in the data object:

{{ configuration/section-group/route! }}

This way, the section group will be similar to:

{{ configuration/section-group/custom! }}
