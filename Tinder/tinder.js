$(".navbar-toggler").click(() => {
    $(".cover").addClass("hide-menu");
    $("#menu-bar").removeClass("hide-menu");
});


$("#close").click( ()=> {
    $("#menu-bar").addClass("hide-menu");
    $(".cover").removeClass("hide-menu");
} );

$(".products-list").click(
    ()=> {
        $(".items").toggleClass("hide-items");
        $("#product").toggleClass("text-color");
});