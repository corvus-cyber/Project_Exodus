$(document).ready(function() {
    $(".Begin").click(function(){
        window.location = $(this).find("a").attr("href");
        $("span").css("", "");
        return false;
    });

function runDoorFade(){
    $(".door").removeClass("evaporate")
    $(".door").addClass("fade-in");
    function fadeOut() {
        setTimeout(function () {
            $(".door").removeClass("fade-in");
            $(".door").addClass("fade-out");
            setTimeout(function(){
                $(".door").addClass("evaporate");
                $(".door").removeClass("fade-out");
            }, 8000);
        }, 10000)};
    fadeOut();    
    
};

runDoorFade();
})