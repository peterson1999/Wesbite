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

function exitForgotToggle() {
    var forgotPass = document.getElementById('forgot-pass-modal');
    var login = document.getElementById('signup-modal');
    forgotPass.style.display = "none";
    login.style.display = "none";
}

        