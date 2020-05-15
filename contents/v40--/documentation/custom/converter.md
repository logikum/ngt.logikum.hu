<!-- ======================================================================
--- Search engine
title:          Translation converters
keywords:       custom, translation, converter
description:    How to add custom translation converters to NgTranslation.
--- Menu system
order:          10
text:           Translation converters
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

# Translation converters

When the translation files are not in JSON format, they must be converted. To
do a conversion, first you have to define the converter function in the module
using the `NGT_TRANSLATION_CONVERTER` token:

{{ custom/converter/module! }}

The function has to implement the `TranslationConverter` interface. The new formats
can defined in the `convert()` method: 

{{ custom/converter/converter! }}

The following example converts .po format translations (where `msgctxt` contains the
translation key) into JSON object:

{{ custom/converter/po-converter! }}
