$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
        $("footer").addClass("bgcolor-animate");
        $(".foot-style").css({
            "background": "linear-gradient(#ffff96, #50cf30)",
            "transition": "background-ease-in 500ms"
        });
    }
    if($(window).scrollTop() + $(window).height() <= $(document).height() - 50){
        $("footer").removeClass("bgcolor-animate");
        $(".foot-style").css({
            "background": "linear-gradient(transparent, #ffff96)",
            "transition": "background-ease-in 500ms"
        });
    }
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});