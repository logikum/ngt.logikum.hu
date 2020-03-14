<!-- ======================================================================
--- Search engine
title:          Search results
keywords:       search, results
description:    The listed items of the search results.
--- Menu system
order:          
text:           
hidden:         true
umbel:          false
--- Page properties
id:             
document:       
layout:         
searchable:     false
======================================================================= -->

# Search results

<form class="form-inline search-phrase" action="/search" method="post">
  <div class="form-group">
    <label for="text2search">Text to search:</label>
    <input type="text" class="form-control" name="text2search" id="text2search"
           maxlength="20" value="{{ .text2search }}">
  </div>
  <button type="submit" class="btn btn-primary">Find</button>
</form>

{{ .results }}

&nbsp;
