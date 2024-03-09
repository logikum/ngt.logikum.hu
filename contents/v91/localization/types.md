<!-- ======================================================================
--- Search engine
title:          Data types
keywords:       localization, l10n
description:    Localization using NgTranslation features.
--- Menu system
order:          1ö
text:           Data types
hidden:         false
umbel:          false
--- Page properties
id:             
document:       
layout:         layout-2-left
$-left:         #side-menu
searchable:     true
--- Side menu
side-menu-root:     /localization
side-menu-header:   Localization
side-menu-top:      
side-menu-depth:    1
======================================================================= -->

# Data types to localize

Localization information can be added to the data placeholders of
transalations in the following form:

{{ localization/localization! }}

where

<table>
  <tr>
    <td class="key">key</td>
    <td colspan="2">The order or the name of the value to interpolate.</td>
  </tr>
  <tr>
    <td class="key">type</td>
    <td colspan="2">The type of the localization. The possible types are</td>
  </tr>
  <tr>
    <td></td>
    <td><code>N</code> or <code>number</code></td>
    <td>for number formatting</td>
  </tr>
  <tr>
    <td></td>
    <td><code>P</code> or <code>percent</code></td>
    <td>for percent formatting</td>
  </tr>
  <tr>
    <td></td>
    <td><code>C</code> or <code>currency</code></td>
    <td>for currency formatting</td>
  </tr>
  <tr>
    <td></td>
    <td><code>D</code> or <code>datetime</code></td>
    <td>for date and time formatting</td>
  </tr>
  <tr>
    <td></td>
    <td><code>R</code> or <code>plural</code></td>
    <td>for plural rules</td>
  </tr>
  <tr>
    <td class="key">options</td>
    <td colspan="2">Optional information depending on the type of the localization.</td>
  </tr>
</table>

The rules of the <b>active language</b> are applied to the value to interpolate.
