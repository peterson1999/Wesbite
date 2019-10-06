function searchBar(){
    $(".header-nav-searchButton").css({
        "display": "none"
    });
    $(".navbar-brand").css({
        "display": "none"
    });
    $(".header-search>input").css({
        "display": "block",
        "width": "75vw"
    });
    $(".header-search>input").focus();
}

$(document).ready(function(){
    $(".header-search>input").focusout(function(){
        $(".header-search>input").css({
            "display": "none"
        });
        $(".header-nav-searchButton").css({
            "display": "block"
        });
        $(".navbar-brand").css({
            "display": "block"
        });
    });
})
