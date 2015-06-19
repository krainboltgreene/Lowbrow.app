(function($) {
  $(".location button[type=submit]").click(function(event) {
    event.preventDefault();
    $(".portal .view").attr("src", $(".location input").val());
  });
})(jQuery);
