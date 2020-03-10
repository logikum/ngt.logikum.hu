<!-- ======================================================================
--- Search engine
title:          Date and time formatting
keywords:       date, time, formatting
description:    Date and time formatting of ng-translation.
--- Menu system
order:          60
text:           Date and time formatting
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

# Date and time formatting

If activeLanguage = 'hu', then these translation texts:

{{ localization/date-time/format! }}

And this employ will produce the indicated output:

<table class="splitted">
  <tr>
    <td>{{ localization/date-time/usage! }}</td>
    <td>&nbsp;</td>
    <td>{{ localization/date-time/result! }}</td>
  </tr>
</table>

Possible options:

<dl>
  <dt>dateStyle, ds</dt>
  <dd>
    The date formatting style to use. Possible values include: <code>"short"</code>,
    <code>"medium"</code>, <code>"long"</code> and <code>"full"</code>.
  </dd>
  <dt>timeStyle, ts</dt>
  <dd>
    The time formatting style to use. Possible values include: <code>"short"</code>,
    <code>"medium"</code>, <code>"long"</code> and <code>"full"</code>.
  </dd>
  <dt>localeMatcher, lm</dt>
  <dd>
    The locale matching algorithm to use. Possible values are <code>"lookup"</code>
    and <code>"best fit"</code>; the default is <code>"best fit"</code>.
  </dd>
  <dt>timeZone, tz</dt>
  <dd>
    The time zone to use. The only value implementations must recognize is
    <code>"UTC"</code>; the default is the runtime's default time zone. Implementations
    may also recognize the time zone names of the IANA time zone database, such as
    <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>, <code>"America/New_York"</code>.
  </dd>
  <dt>hour12, h12</dt>
  <dd>
    Whether to use 12-hour time (as opposed to 24-hour time). Possible values
    are <code>true</code> and <code>false</code>; the default is locale dependent.
  </dd>
  <dt>formatMatcher, fm</dt>
  <dd>
    The format matching algorithm to use. Possible values are <code>"basic"</code>
    and <code>"best fit"</code>; the default is <code>"best fit"</code>. See the
    following paragraphs for information about the use of this property.
  </dd>
</dl>

The following properties describe the date-time components to use in formatted
output, and their desired representations. Implementations are required to
support at least the following subsets:

* `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second`
* `weekday`, `year`, `month`, `day`
* `year`, `month`, `day`
* `year`, `month`
* `month`, `day`
* `hour`, `minute`, `second`
* `hour`, `minute`

Implementations may support other subsets, and requests will be negotiated
against all available subset-representation combinations to find the best match.
Two algorithms are available for this negotiation and selected by the <code>formatMatcher</code>
property: A fully specified <code>"basic"</code> algorithm and an implementation-dependent
<code>"best fit"</code> algorithm.

<dl>
  <dt>weekday, wd</dt>
  <dd>
    The representation of the weekday. Possible values are:
    <ul>
      <li><code>"long"</code> (e.g. Thursday)</li>
      <li><code>"short"</code> (e.g. Thu)</li>
      <li><code>"narrow"</code> (e.g. T). Two weekdays may have the same narrow
        style for some locales (e.g. Tuesday's narrow style is also T).</li>
    </ul>
  </dd>
  <dt>era</dt>
  <dd>
    The representation of the era. Possible values are:
    <ul>
      <li><code>"long"</code> (e.g. Anno Domini)</li>
      <li><code>"short"</code> (e.g. AD)</li>
      <li><code>"narrow"</code> (e.g. A)</li>
    </ul>
  </dd>
  <dt>year, y</dt>
  <dd>
    The representation of the year. Possible values are:
    <ul>
      <li><code>"numeric"</code> (e.g. 2020)</li>
      <li><code>"2-digit"</code> (e.g. 20)</li>
    </ul>
  </dd>
  <dt>month, M</dt>
  <dd>
    The representation of the month. Possible values are:
    <ul>
      <li><code>"numeric"</code> (e.g. 2)</li>
      <li><code>"2-digit"</code> (e.g. 02)</li>
      <li><code>"long"</code> (e.g. March)</li>
      <li><code>"short"</code> (e.g. Mar)</li>
      <li><code>"narrow"</code> (e.g. M). Two months may have the same narrow
        style for some locales (e.g. May's narrow style is also M).</li>
    </ul>
  </dd>
  <dt>day, d</dt>
  <dd>
    The representation of the day. Possible values are:
    <ul>
      <li><code>"numeric"</code> (e.g. 1)</li>
      <li><code>"2-digit"</code> (e.g. 01)</li>
    </ul>
  </dd>
  <dt>hour, h</dt>
  <dd>
    The representation of the hour. Possible values are <code>"numeric"</code>,
    <code>"2-digit"</code>.
  </dd>
  <dt>minute, m</dt>
  <dd>
    The representation of the minute. Possible values are <code>"numeric"</code>,
    <code>"2-digit"</code>.
  </dd>
  <dt>second, s</dt>
  <dd>
    The representation of the second. Possible values are <code>"numeric"</code>,
    <code>"2-digit"</code>.
  </dd>
  <dt>timeZoneName, tzn</dt>
  <dd>
    The representation of the time zone name. Possible values are:
    <ul>
      <li><code>"long"</code> (e.g. British Summer Time)</li>
      <li><code>"short"</code> (e.g. GMT+1)</li>
    </ul>
  </dd>
</dl>
