<!-- ======================================================================
--- Search engine
title:          Currency formatting
keywords:       currency, formatting
description:    Currency formatting of ng-translation.
--- Menu system
order:          30
text:           Currency formatting
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

# Currency formatting

If activeLanguage = 'it', then these translation texts:

{{ localization/currency/format! }}

And this employ will produce the indicated output:

<table class="splitted">
  <tr>
    <td>{{ localization/currency/usage! }}</td>
    <td>&nbsp;</td>
    <td>{{ localization/currency/result! }}</td>
  </tr>
</table>

The value of the currency must be provided as a 2 element array: the first
element is a number, the second one is the currency code. See options later.
