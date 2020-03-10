<!-- ======================================================================
--- Search engine
title:          Configuration
keywords:       configuration
description:    Configuration of ng-translation.
--- Menu system
order:          20
text:           Configuration
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
side-menu-top:      Installation
side-menu-depth:    2
======================================================================= -->

# Configuration

An example configuration object looks like that:

{{ configuration/config! }}

The configuration object has the following properties:

### translationUrl: <span class="data-type">string</span>

The property defines the URL where NgTranslation will download the translation
files from. The property value is a template string that has to contain 2
named parameters surrounded by curly brackets:

<dl>
  <dt>language</dt>
  <dd>The code of the current or the requested language, e.g. 'en', 'en-GB',
    'en-US', 'es', 'fr' etc.</dd>
  <dt>section</dt>
  <dd>The name of a partial translation file without the file extension, see
    the following property.</dd>
</dl>

In the case of the above example the following files will be downloaded:

{{ configuration/assets! }}

When you use this template:

{{ configuration/translation-url! }}

Then the following translation files will be downloaded:

{{ configuration/translations! }}

All the other translation files will bo downloaded when they are needed,
i.e. the user changes language or request a lazy loaded module.

### sections: <span class="data-type">Array&lt;string></span>

All translations can be stored in a big file, however, it is easier to maintain
them when they are divided into several smaller files. The basis of the
distribution can be - for example - that each Angular module has its own
translation file. Even a bigger module can have more translation files. Another
possibility is to collect the texts used application wide into one or more shared
file. Or you can use your own strategy.

he sections are the names of this divided translation files without the file
extension. In case of lazy loaded modules the path of the module has to
precede the file name, separated by a colon. For that the translation service
could download the necessary translation files for the lazy loaded module,
the path is used to filter the needed sections. The download is initiated by
the LoadTranslationsGuard.

As an example, if you define the following route:

{{ configuration/routes-1! }}

Then you can define the section of the lazy loaded module like that:

{{ configuration/sections-1-1! }}

Or you can divide the translations into several sections:

{{ configuration/sections-1-2! }}

If the path is inapt as a name, you can apply an alternate section prefix on
the route definition:

{{ configuration/routes-2! }}

Then the corresponding sections will be:

{{ configuration/sections-2! }}

### defaultLanguage: <span class="data-type">string</span>

The code of the default language. The translations of the eager loaded modules
in the default language are downloaded at the start of the application.

### disableWarnings: <span class="data-type">boolean</span>

An optional value to disable NgTranslation warning messages.The default
value is false.
