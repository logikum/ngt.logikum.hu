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
side-menu-top:      
side-menu-depth:    2
======================================================================= -->

# Configuration

An example configuration object looks like that:

{{ configuration/config! }}

A typical configuration looks like that:

{{ configuration/sample! }}

The configuration object has the following properties:

### translationPath: <span class="data-type">string</span>

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

{{ configuration/translation-path! }}

Then the following translation files will be downloaded:

{{ configuration/translations! }}

All the other translation files will bo downloaded when they are needed,
i.e. the user changes language or request a lazy loaded module.

### translationFormat: <span class="data-type">string</span>

Usually the translation texts are stored in JSON files, and the default value
of translationFormat is `'JSON'`. This parameter has role only when the texts
are stored in different format, e.g. po, xliff, resx etc., and a converter is
used to transform the translations into JSON format. Defining this parameter
sets the default format for all sections.

### loaderType: <span class="data-type">LoaderType</span>

It defines the type of the loader used to download the translation files. The
possible values are `'json'`, `'text'`, `'blob'` and `'arraybuffer'`, the default
value is `'json'`, This parameter is also used for custom converters.

### sections: <span class="data-type">Array&lt;string | Section | SectionGroup></span>

All translations can be stored in a big file, however, it is easier to maintain
them when they are divided into several smaller files. The basis of the
distribution can be - for example - that each Angular module has its own
translation file. Even a bigger module can have more translation files. Another
possibility is to collect the texts used application wide into one or more shared
file. Or you can use your own strategy.

The sections property enlists the translation files, or sections in other word.
A section actually is the name of a translation file without the file extension.
The translation service cand download the necessary translation files for a lazy
loaded module in lazy way as well, The download is initiated by the `LoadTranslationsGuard`
that must be provided in the route definition of the lazy loaded module.

See more information about section configuration on the next pages.

### defaultLanguage: <span class="data-type">string</span>

The code of the default language. The translations of the eager loaded modules
in the default language are downloaded at the start of the application.

### disableWarnings: <span class="data-type">boolean</span>

An optional value to disable NgTranslation warning messages.The default
value is `false`.
