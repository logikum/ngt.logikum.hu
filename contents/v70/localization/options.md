<!-- ======================================================================
--- Search engine
title:          Number, percent and currency options
keywords:       number, percent, currency, options
description:    Number, percent and currency options in NgTranslation.
--- Menu system
order:          40
text:           Number related options
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

# Number, percent and currency options

<dl>
  <dt>localeMatcher, lm</dt>
  <dd>
    The locale matching algorithm to use. Possible values are <code>"lookup"</code>
    and <code>"best fit"</code>; the default is <code>"best fit"</code>.
  </dd>
  <dt>currencyDisplay, cd</dt>
  <dd>
    How to display the currency in currency formatting. Possible values are
    <code>"symbol"</code> to use a localized currency symbol such as €,
    <code>"code"</code> to use the ISO currency code, <code>"name"</code> to
    use a localized currency name such as "dollar"; the default is <code>"symbol"</code>.
  </dd>
  <dt>useGrouping, ug</dt>
  <dd>
    Whether to use grouping separators, such as thousands separators or
    thousand/lakh/crore separators. Possible values are <code>true</code> and
    <code>false</code>; the default is <code>true</code>.
  </dd>
</dl>

The following properties fall into two groups: <code>minimumIntegerDigits</code>,
<code>minimumFractionDigits</code>, and <code>maximumFractionDigits</code> in one
group, <code>minimumSignificantDigits</code> and <code>maximumSignificantDigits</code>
in the other. If at least one property from the second group is defined, then the
first group is ignored.

<dl>
  <dt>minimumIntegerDigits, minid</dt>
  <dd>
    The minimum number of integer digits to use. Possible values are from 1 to 21;
    the default is 1.
  </dd>
  <dt>minimumFractionDigits, minfd</dt>
  <dd>
    The minimum number of fraction digits to use. Possible values are from 0 to 20;
    the default for plain number and percent formatting is 0; the default for
    currency formatting is the number of minor unit digits provided by the
    <a href="http://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a>
    (2 if the list doesn't provide that information).
  </dd>
  <dt>maximumFractionDigits, maxfd</dt>
  <dd>
    The maximum number of fraction digits to use. Possible values are from 0 to 20;
    the default for plain number formatting is the larger of
    <code>minimumFractionDigits</code> and 3; the default for currency formatting
    is the larger of <code>minimumFractionDigits</code> and the number of minor
    unit digits provided by the
    <a href="http://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a>
    (2 if the list doesn't provide that information); the default for percent
    formatting is the larger of <code>minimumFractionDigits</code> and 0.
  </dd>
  <dt>minimumSignificantDigits, minsd</dt>
  <dd>
    The minimum number of significant digits to use. Possible values are from 1 to 21;
    the default is 1.
  </dd>
  <dt>maximumSignificantDigits, maxsd</dt>
  <dd>
    The maximum number of significant digits to use. Possible values are from 1 to 21;
    the default is 21.
  </dd>
</dl>
