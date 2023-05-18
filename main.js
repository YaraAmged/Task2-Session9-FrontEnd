clicked = true;
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
  $(".size-option").on("click", function () {
    $(".size-option").each(function (ele) {
      $(this).removeClass("bg-dark text-light");
    });
    $(this).toggleClass("bg-dark text-light");
  });
});
