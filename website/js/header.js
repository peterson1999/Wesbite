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
// $(".header-search>input").focusout(function(){
//     if(screen.width<=540){
//         $(".header-search>input").css({
//             "display": "none"
//         });
//         $(".header-search>button").css({
//             "display": "block"
//         });
//         $(".navbar-brand").css({
//             "display": "block"
//         });
//     }
// });
$(document).mouseup(function(e) 
{
    var container = $(".header-search>input");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
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
    }
});