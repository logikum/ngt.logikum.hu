<!-- ======================================================================
--- Search engine
title:          Lazy loaded modules
keywords:       configuration, lazy, loaded, module
description:    Setting translation files for lazy loaded modules.
--- Menu system
order:          40
text:           Lazy loaded module
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

# Configuration of lazy loaded modules

The translation files of a lazy loaded module are loaded with the module only
if the route definition of the module contains the `loadTranslations` guard.
The name of the section group must be equal to the route path by default.

Let's take the following routes:

{{ configuration/lazy/routes! }}

...and this section configuration:

{{ configuration/lazy/sections! }}

The translation file of the __spring module__ is loaded eagerly, i.e. at the start
of the application.

The translation file of the __summer module__ is loaded lazy, i.e. at the same time
when the module is loaded.

The translation file of the __autumn module__ is loaded lazy, however, the file name
does not match the route name (and the module name). The translation keys still use
the module name defined by the alias property.

The translation files of the __winter module__ are loaded lazy, nevertheless from
a different path, and the file group is identified by a name other than the route path.
