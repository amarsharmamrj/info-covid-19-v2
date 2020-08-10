$(document).ready(function() {

    if (annyang) {

        // Let's define a command.
        var commands = {
            'hello': function() {
                var audio = $("#welcome-audio")[0];
                audio.play();
            },
            'hi': function() {
                var audio = $("#welcome-audio")[0];
                audio.play();
            },
            '(open) (show) (list) (of) commands': function() {
                window.location.href = "list-of-commands.html";
            },
            '(scroll) up': function() {
                window.scrollBy({
                    top: -400,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll) top': function() {
                window.scrollBy({
                    top: -400,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(aur) (page) (ko) upar (scroll) (jao) (karo)': function() { //hindi command for scrolling up
                window.scrollBy({
                    top: -400,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll) down': function() {
                window.scrollBy({
                    top: 400,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll) bottom': function() {
                window.scrollBy({
                    top: 400,
                    left: 0,
                    behavior: 'smooth'
                });
                console.log("scroll down");
            },
            '(aur) (page) (ko) niche (scroll) (jao) (karo)': function() { //hindi command for scroling down
                window.scrollBy({
                    top: 400,
                    left: 0,
                    behavior: 'smooth'
                });
                console.log("scroll down");
            },
            '(scroll) top (of) (the) page': function() {
                window.scrollBy({
                    top: -10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll) up (of) (the) page': function() {
                window.scrollBy({
                    top: -10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            'page ke upar (scroll) (jao) (karo)': function() { //hindi command for top of page
                window.scrollBy({
                    top: -10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll)  bottom (of) (the) page': function() {
                window.scrollBy({
                    top: 10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(scroll)  down (of) (the) page': function() {
                window.scrollBy({
                    top: 10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            'page ke niche (scroll) (jao) (karo)': function() { //hindi command for bottom of page
                window.scrollBy({
                    top: 10000,
                    left: 0,
                    behavior: 'smooth'
                });
            },
            '(go) back': function() {
                window.history.go(-1);
            },
            '(go) previous': function() {
                window.history.go(-1);
            },
            '(go) forward': function() {
                window.history.go(+1);
            },
            '(go) next': function() {
                window.history.go(+1);
            },
            '(open) home': function() {
                window.location.href = "#hero-section";
            },
            '(open) state (wise)': function() {
                window.location.href = "#state-wise-datatable-section";
            },
            '(open) district (wise)': function() {
                window.location.href = "#state-wise-section";
            },
            '(open) zones': function() {
                window.location.href = "#zone-wise-district-section";
            },
            '(open) all countries': function() {
                window.location.href = "#country-wise-section";
            },
            '(open) major countries': function() {
                window.location.href = "#all-countries-section";
            },
            '(open) contact': function() {
                window.location.href = "#contact";
            },
            '(open) (show) (mobile) menu': function() {
                $(".mobile-menu").css("width", "90%");
                $(".mobile-menu").css("padding", "10px 15px 0px 15px");
                $(".mobile-menu").css("box-shadow", "20px 0px 20px 20px #5f605dcc");
                $("body").css("overflow", "hidden");
                $(".mobile-menu").css("overflow", "scroll");
                $(".main-layer").click(function() {
                    $(".mobile-menu").css("width", "90%");
                    $("body").css("overflow", "scroll");
                });
            },
            '(open) (show) (mobile) navigation': function() {
                $(".mobile-menu").css("width", "90%");
                $(".mobile-menu").css("padding", "10px 15px 0px 15px");
                $(".mobile-menu").css("box-shadow", "20px 0px 20px 20px #5f605dcc");
                $("body").css("overflow", "hidden");
                $(".mobile-menu").css("overflow", "scroll");
                $(".main-layer").click(function() {
                    $(".mobile-menu").css("width", "90%");
                    $("body").css("overflow", "scroll");
                });
            },
            'close (mobile) (menu)': function() {
                $(".mobile-menu").css("width", "0%");
                $(".mobile-menu").css("padding", "0px");
                $(".mobile-menu").css("box-shadow", "0px 0px 0px 0px #5f605dcc");
                $("body").css("overflow", "scroll");
            },
            'hide (mobile) (menu)': function() {
                $(".mobile-menu").css("width", "0%");
                $(".mobile-menu").css("padding", "0px");
                $(".mobile-menu").css("box-shadow", "0px 0px 0px 0px #5f605dcc");
                $("body").css("overflow", "scroll");
            },
            'open github': function() {
                window.location.href = "https://github.com/amarsharmamrj";
            },
            '(open) linkedin': function() {
                window.location.href = "https://www.linkedin.com/in/amarnath-vishwakarma-7196b8178/";
            },
            '(open) facebook': function() {
                window.location.href = "https://www.facebook.com/amarnathmrj";
            },
            '(open) instagram': function() {
                window.location.href = "https://www.instagram.com/amarnathmrj/?hl=en";
            },
            'open pinterest': function() {
                window.location.href = "https://in.pinterest.com/amarsharmamrj/";
            },

        };

        annyang.setLanguage('en-IN');

        // Add our commands to annyang
        annyang.addCommands(commands);

        // displaying commands in console
        annyang.addCallback('result', function(wordMessage) {
            console.log(wordMessage[0]);
        });

        // Start listening.
        annyang.start();
    }
});