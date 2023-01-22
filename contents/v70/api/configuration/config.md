<!-- ======================================================================
--- Search engine
title:          TranslationConfig
keywords:       TranslationConfig, configuration
description:    TranslationConfig configuration object.
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

{{ api/configuration/config }}

### translationPath

The property defines the URL where NgTranslation will download the translation
files from. The property value is a template string that has to contain 2 named
parameters surrounded by curly brackets:

<dl>
  <dt>language</dt>
  <dd>The code of the current or the requested language.</dd>
  <dt>section</dt>
  <dd>The name of a partial translation file without the file extension.</dd>
</dl>

### translationFormat

Defines the format of the translation files. The default value is `JSON.` This
parameter is used for custom translation converters.

### loaderType

Defines the type of the loader used to download the translation files. The
possible values are `'json'`, `'text'`, `'blob'` and `'arraybuffer'`, the default
value is `'json'`, This parameter is also used for custom converters.

### sections

Defines the collection of translation files. When a simple string is used, it is
the name of a translation file without the file extension.

### defaultLanguage

The code of the default language.

### allowedLanguages

An optional list of language codes. WHen the list is supplied, only the languages
listed will be used, including the default language.

### disableWarnings

If true, warning messages are not written to the console in production mode. The
default value is false.

### currencyDefaultOptions

Provides default style options for currencies. The property names are the currency
codes, and the values are strings containing the options set by default. The options
are defined in the same way as currency formatting in localization.
