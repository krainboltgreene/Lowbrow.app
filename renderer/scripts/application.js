(function($) {
  $(".navbar .location button[type=submit]").click(function(event) {
    event.preventDefault();
    $(".portal .view").attr("src", $(".navbar .location input").val());
  });
})(jQuery);
