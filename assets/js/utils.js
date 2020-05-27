// Lazy Load
$(function(){
    $('.lazy').lazy();

});
$(".portfolio-modal").on('show.bs.modal', function (e) {
    $("img[data-src]").Lazy();
    $("iframe[data-src]").Lazy();
    $('.img-fluid').lazy();
});

//Stop YouTube on close modal
$(".portfolio-modal").on('hide.bs.modal', function (e) {
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("src"));
});