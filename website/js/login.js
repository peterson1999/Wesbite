var s = document.getElementById('frame').style;
        function fadein(){
            s.opacity= 1;
            s.display="block";
        };
        function fadeout(){
            s.opacity = 1;
            (function fade(){(s.opacity-=.1)==0?s.display="none":setTimeout(fade,40)})();
        };
        document.addEventListener('keydown', function(event) {
            const key = event.key; // Or const {key} = event; in ES6+
            if (key === "Escape") {
                fadeout();
            }
        });
        $("#forgot-pass").click(function(){
            $(".login-popup").slideUp(500);
            $(".forgot-password").slideDown(500);
        });
        $("#backtoLogin").click(function(){
            $(".forgot-password").slideUp(500);
            $(".login-popup").slideDown(500);
        });