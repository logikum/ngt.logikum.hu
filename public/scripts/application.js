hljs.highlightAll();

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const elements = document.getElementsByTagName('code');
    for (let i = 0; i < elements.length; i++) {
      let text = elements[i].innerHTML;
      text = text.replaceAll('^^', '</strong>');
      text = text.replaceAll('^', '<strong>');
      text = text.replaceAll('~~', '</em>');
      text = text.replaceAll('~', '<em>');
      elements[i].innerHTML = text;
    }
  }, 100);
});

(function() {
  $("input[name=text2search]").keyup(function() {
    var submit = $(this).closest("form").find(":submit");
    if ($(this).val().length < 3)
      submit.attr("disabled","disabled");
    else
      submit.removeAttr("disabled");
  });
})();
