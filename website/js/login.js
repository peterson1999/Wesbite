// var s = document.getElementById('frame').style;
//         function fadein(){
//             s.opacity= 1;
//             s.display="block";
//         };
//         function fadeout(){
//             s.opacity = 1;
//             (function fade(){(s.opacity-=.1)==0?s.display="none":setTimeout(fade,40)})();
//         };
//         document.addEventListener('keydown', function(event) {
//             const key = event.key; // Or const {key} = event; in ES6+
//             if (key === "Escape") {
//                 fadeout();
//             }
//         });
//         $("#forgot-pass").click(function(){
//             $(".login-popup").slideUp(500);
//             $(".forgot-password").slideDown(500);
//         });
//         $("#backtoLogin").click(function(){
//             $(".forgot-password").slideUp(500);
//             $(".login-popup").slideDown(500);
//         });
var login = document.getElementById('signup-modal');
login.style.display = "none";

var forgotPass = document.getElementById('forgot-pass-modal');
forgotPass.style.display = "none";

function loginToggle() {
    var login = document.getElementById('signup-modal');
    if (login.style.display === "none") {
        login.style.display = "block";
    }
    else {
        login.style.display = "none";
    }
}

function loginForgotToggle() {
    var forgotPass = document.getElementById('forgot-pass-modal');
    var login = document.getElementById('signup-modal');
    if (login.style.display === "none") {
        login.style.display = "block";
        forgotPass.style.display = "none";
    }
    else {
        login.style.display = "none";
        forgotPass.style.display = "block";
    }

}


        