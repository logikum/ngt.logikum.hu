<!-- ======================================================================
--- Search engine
title:          Plural rules
keywords:       Plural rules
description:    Plural rules of ng-translation.
--- Menu system
order:          70
text:           Plural rules
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

# Plural rules

If activeLanguage = 'en', then these translation texts:

{{ localization/plural/format! }}

And this employ will produce the indicated output:

<table class="splitted">
  <tr>
    <td>{{ localization/plural/usage! }}</td>
    <td>&nbsp;</td>
    <td>{{ localization/plural/result! }}</td>
  </tr>
</table>

Each option determines a text to be displayed depending on the value passed.

<dl>
  <dt>option key</dt>
  <dd>
    <div class="pull-left"><code>number</code></div>
    <div>
      The option value is displayed if the key matches the value passed.
    </div>
    <div class="pull-left"><code>number~number</code></div>
    <div>
      If the option key defines a range, the option value is displayed when
      the value passed is in the range. The boundaries  of the range are separated
      by a tilde (<code>~</code>),
    </div>
    <div class="pull-left"><code>"other"</code></div>
    <div>
      The option value is displayed when none of the option keys matches
      the value passed.
    </div>
  </dd>
  <dt>option value</dt>
  <dd>
    Represents a text to be displayed when the option key matches the value passed.
    If the text contains a hashmark (<code>#</code>), it is replaced by the value passed.
  </dd>
</dl>
