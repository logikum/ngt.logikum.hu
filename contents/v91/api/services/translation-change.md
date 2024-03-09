<!-- ======================================================================
--- Search engine
title:          TranslationChange
keywords:       service, state, change
description:    TranslationChange describes a change in the state of the TranslationService.
--- Menu system
order:          10
text:           TranslationChange
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

# TranslationChange

This type describes a change occurred in the state of the translation service
due to downloading translation files.

{{ api/services/translation-change }}

### context

This property indicates the context of the change:

<dl>
  <dt>'app'</dt>
  <dd>
    The change occurs at the initialization of the application during startup.
  </dd>
  <dt>'module'</dt>
  <dd>
    The change occurs at the starting of a lazy loaded module.
  </dd>
  <dt>'language'</dt>
  <dd>
    The state change occurs due to a language change.
  </dd>
</dl>

### action

The value indicates the action occurring at the moment:

<dl>
  <dt>'app'</dt>
  <dd>
    The change occurs at the initialization of the application during startup.
  </dd>
  <dt>'module'</dt>
  <dd>
    The change occurs at the starting of a lazy loaded module.
  </dd>
  <dt>'language'</dt>
  <dd>
    The state change occurs due to a language change.
  </dd>
</dl>

### data

Provides additional information regarded to the change:

<dl>
  <dt>
    <span class="js-type">context =</span> 'app'
  </dt>
  <dd>
    No data.
  </dd>
  <dt>
    <span class="js-type">context =</span> 'module'
  </dt>
  <dd>
    The name of the lazy loaded module.
  </dd>
  <dt>
    <span class="js-type">context =</span> 'language'
  </dt>
  <dd>
    The code of the language.
  </dd>
</dl>

### description

Text description of the state change to display.
