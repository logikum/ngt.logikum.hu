<!-- ======================================================================
--- Search engine
title:          Configuration section
keywords:       configuration, section
description:    The definition of translation sections.
--- Menu system
order:          10
text:           Sections
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

# Sections

A section defines a translation file. The following JSON object is an example section:

{{ configuration/section/full! }}

The section has these properties:

<dl>
  <dt>name</dt>
  <dd>The name of the translation file without its file extension.</dd>
  <dt>alias</dt>
  <dd>An optional value to use in the translation keys. The default value equals
      to the name. It can be useful when the file name is too long, or the file
      was renamed.</dd>
  <dt>path</dt>
  <dd>An optional path of the translation file when it does not match the default
      template.</dd>
  <dt>format</dt>
  <dd>An optional value that defines the translation format. It is used in custom
      format converters.</dd>
  <dt>type</dt>
  <dd>The type of the returned result expected by the downloader. The possible
      values are: <code>'json'</code>, <code>'text'</code>, <code>'blob'</code> and
       <code>'arraybuffer'</code>. The default value is <code>'json'</code>.
       This parameter also is used in custom format converters.</dd>
</dl>

If a section uses the default values, it is rather simple:

{{ configuration/section/simple! }}

The above simple definition can be replaced by the name string:

{{ configuration/section/string! }}
