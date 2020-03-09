'use strict';

/**
 * Provides a custom marked renderer.
 * @param {Marked} marked - The marked application.
 * @returns {Marked.Renderer} The customized marked renderer.
 */
function markedRenderer( marked ) {

  // Get the original renderer.
  var renderer = new marked.Renderer();

  /**
   * Overwrite link rendering to provide target properties.
   * The title property can contain the target value separated by a vertical bar.
   * Examples:
   *    * "title" - title contains the title only
   *    * "title | _blank" - title contains both title and target
   *    * "|_blank" - title contains the target only
   *    * "|" - default target is "_blank"
   * @param {string} href
   * @param {string} title
   * @param {string} text
   * @returns {string} The HTML text of the link.
   */
  renderer.link = function( href, title, text) {
    var target = null;

    title = title || '';
    var pos = title.indexOf( '|' );
    if (pos > -1) {
      target = title.substring( pos + 1).trim() || '_blank';
      title = title.substring( 0, pos).trim();
    }

    return  '<a href="' + href + '"' +
      (target ? ' target="' + target + '"' : '') +
      (title ? ' title="' + title + '"' : '') +
      '>' + text + '</a>';
  };

  /**
   * Overwrite code rendering to provide text decoration - omit HTML escape.
   * @param {string} code
   * @param {string} infostring
   * @param {boolean} escaped
   * @returns {*}
   */
  renderer.code = function( code, infostring, escaped ) {
    var text = `<pre><code class="language-${ infostring }">${ code }</code></pre>`;
    return text;
  };

  // Returns the customized marked renderer.
  return renderer;
}

module.exports = markedRenderer;
