$(".portfolio-modal").on('hidden.bs.modal', function (e) {
  $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
});
$(function(){
  $("iframe[data-src]").Lazy();
});