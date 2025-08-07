

import $ from "jquery";

$(function () {
  function updateFooterLinks() {
    const isMobile = $(window).width() <= 768;

    if (isMobile) {
      console.log("Mobile view: adding .someClass and collapsing all sections");

      $(".footer-links-wrapper").addClass("someClass");
      $(".footer-links-wrapper ul").hide(); 
      $(".footer-links-wrapper h3").removeClass("expanded");
    } else {
      console.log("Desktop view: removing .someClass and expanding all sections");

      $(".footer-links-wrapper").removeClass("someClass");
      $(".footer-links-wrapper ul").show(); 
      $(".footer-links-wrapper h3").removeClass("expanded"); 
    }
  }
  updateFooterLinks();
  $(window).on("resize", updateFooterLinks);
  $(document).on("click", ".someClass h3", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
});