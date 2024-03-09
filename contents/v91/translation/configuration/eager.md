<!-- ======================================================================
--- Search engine
title:          Eagerly loaded modules
keywords:       configuration, eagerly, loaded, module
description:    Setting translation files for eagerly loaded modules.
--- Menu system
order:          30
text:           Eagerly loaded module
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

# Configuration of eagerly loaded modules

The sections part of the configuration typically contains the list of the file
names without extension of the translation files in case of egaerly loaded modules:

{{ configuration/eager/simple! }}

The longer section definition can be used when needed:

{{ configuration/eager/full! }}
