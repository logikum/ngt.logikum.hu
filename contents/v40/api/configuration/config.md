<!-- ======================================================================
--- Search engine
title:          TranslationConfig
keywords:       TranslationConfig
description:    TranslationConfig.
--- Menu system
order:          10
text:           TranslationConfig
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

# TranslationConfig

Represents the settings of the translation module.

{{ api/translation-config }}

### translationUrl

The property defines the URL where NgTranslation will download the translation
files from. The property value is a template string that has to contain 2 named
parameters surrounded by curly brackets:

<dl>
  <dt>language</dt>
  <dd>The code of the current or the requested language.</dd>
  <dt>section</dt>
  <dd>The name of a partial translation file without the file extension.</dd>
</dl>

### sections

The names of the translation files without the file extension.  In case of
lazy loaded modules the path of the module has to precede the file name,
separated by a colon.

### defaultLanguage

The code of the default language.
