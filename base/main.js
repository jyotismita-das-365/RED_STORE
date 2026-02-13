$(document).ready(function () {
 $("#toggleMenu").click(function () {
  $("nav ul").toggleClass("active");
 });
});
$(window).resize(function () {
 if ($(window).width() > 666) {
  $("nav ul").removeClass("active");
 }
});
$(window).click(function (event) {
 if (!$(event.target).closest(".navbar").length) {
  $("nav ul").removeClass("active");
 }
});