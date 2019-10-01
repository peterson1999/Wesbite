$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {
        $(".foot-style").css({
            "background": "#bf2828",
            "transition": "background ease-in 0ms"
        });
    }
    if($(window).scrollTop() + $(window).height() <= $(document).height() - 50){
        $(".foot-style").css({
            "background": "linear-gradient(transparent, #bf2828)",
            "transition": "background ease-in 500ms"
        });
    }
});

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});