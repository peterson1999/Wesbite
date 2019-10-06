function searchBar(){
    $(".header-nav-searchButton").css({
        "display": "none"
    });
    $(".navbar-brand").css({
        "display": "none"
    });
    $(".header-nav-searchBar").css({
        "display": "block"
    });
    $(".header-nav-searchBar").focus();
}

$(document).ready(function(){
    $(".header-nav-searchBar").focusout(function(){
        $(".header-nav-searchBar").css({
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
