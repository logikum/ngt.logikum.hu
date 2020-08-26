<!-- ======================================================================
--- Search engine
title:          Slow downloading
keywords:       text, list
description:    Prevent the effect of slow downloading of translation files.
--- Menu system
order:          80
text:           Slow downloading
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

# Slow downloading of translation files

If the downloading of the translation files is too slow at the startup of the
application, then the translation keys will not be refreshed on the view. This
effect can be prevented by watching the state change of the translation service:

{{ slow/code! }}

The `initialized` property can be used to hide the splash screen.
