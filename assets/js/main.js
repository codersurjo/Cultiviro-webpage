// When your page loads
$(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".mobile-menu").toggleClass("active-menu-1");
    });
  

});
  