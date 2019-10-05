$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 40) {
        $("footer").removeClass("bgcolor-revaniamate");
        $("footer").addClass("bgcolor-animate");
        $(".foot-style").css({
            "background": "linear-gradient(#ffff96, #50cf30)"
        });
    }
    if($(window).scrollTop() + $(window).height() <= $(document).height() - 50){
        $("footer").removeClass("bgcolor-animate");
        $("footer").addClass("bgcolor-revaniamate");
        $(".foot-style").css({
            "background": "linear-gradient(transparent, #ffff96)"
        });
    }
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});