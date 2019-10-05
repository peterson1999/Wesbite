function search(){
    $(".header-search>button").css({
        "display": "none"
    });
    $(".navbar-brand").css({
        "display": "none"
    });
    $(".header-search>input").css({
        "display": "block",
        "width": "80vw"
    });
    $(".header-search>input").focus();
}
$(".header-search>input").focusout(function(){
    if(screen.width<=540){
        $(".header-search>input").css({
            "display": "none"
        });
        $(".header-search>button").css({
            "display": "block"
        });
        $(".navbar-brand").css({
            "display": "block"
        });
    }
});