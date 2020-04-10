<!-- ======================================================================
--- Search engine
title:          TranslateDirective
keywords:       TranslateDirective
description:    TranslateDirective.
--- Menu system
order:          50
text:           TranslateDirective
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

# TranslateDirective

Provides access to the translation service. Using as structural directive:

{{ api/directives/structural }}

<dl>
  <dt>
    node<span class="js-type">: string</span>
  </dt>
  <dd>
    The optional beginning of the text identifier for all calls.
  </dd>
  <dt>
    localize<span class="js-type">: LocalizeContext</span>
  </dt>
  <dd>
    A helper object with methods to support localization.
  </dd>
  <dt>
    key<span class="js-type">: string</span>
  </dt>
  <dd>
    The identifier of the text. If node is defined, then node and key are merged.
  </dd>
  <dt>
    values<span class="js-type">: object | Array&lt;string> | string | number | Boolean</span>
  </dt>
  <dd>
    The optional value or values to interpolate into the localized text.
  </dd>
</dl>

Using as attribute directive:

{{ api/directives/attribute }}

<dl>
  <dt>
    translate<span class="js-type">: string</span>
  </dt>
  <dd>
    The identifier of the text.
  </dd>
  <dt>
    translateParams<span class="js-type">: object | Array&lt;string> | string | number | Boolean</span>
  </dt>
  <dd>
    The optional value or values to interpolate into the localized text.
  </dd>
</dl>
