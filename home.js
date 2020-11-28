$(function(){
    $("[data-trigger]").on("click", function () {
        var target_id = $(this).attr('data-trigger');
        $(target_id).toggleClass("show")
        $('body').toggleClass("offcanvas-active");
    })
})


// close toggle
$(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");

})