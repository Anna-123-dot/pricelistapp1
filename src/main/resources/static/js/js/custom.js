$("#preloader").animate({
    'opacity': '0'
}, 600, function () {
    setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
    }, 300);
});
