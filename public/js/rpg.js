$(document).ready(function() {
    $(".Begin").click(function(){
        window.location = $(this).find("a").attr("href");
        $("span").css("", "");
        return false;
    });



    var content = "Welcome to EXODUS, Team Undefined's venture into choose-your-own-adventure, with a sinister twist. While delving into the nightmare, make your choices carefully; the consequences can be dire. Best of Luck."

    console.log(content)

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    //console.log(ele)
    $(ele).hide().appendTo(".description").each(function (i) {
        $(this).delay(50 * i).css({
            display: 'inline',
            opacity: 0,
        }).animate({
            opacity: 1,
            color: "white",
        }, 100);
    });
     //TIMER THAT WILL MAKE IMAGES FADE IN AND FADE OUT
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

    function runDeathFade(){
        $(".death").removeClass("evaporate")
        $(".death").addClass("fade-in");
        function fadeOut() {
            setTimeout(function () {
                $(".death").removeClass("fade-in");
                $(".death").addClass("fade-out");
                setTimeout(function(){
                    $(".death").addClass("evaporate");
                    $(".death").removeClass("fade-out");
                }, 8000);
            }, 10000)};
        fadeOut();    
    };
        

    runDoorFade();
    runDeathFade();


    
   

})