$(document).ready(function() {
    $(".Begin").click(function(){
        window.location = $(this).find("a").attr("href");
        $("span").css("", "");
        return false;
    });



    var content = "You awake in a cold dimly lit room, damp sweat coating your clammy skin. The air is tight in your chest, you struggle to gain a sense of your surroundings. How did you end up here? This isn't your bedroom, and the rank pile of rags you find yourself lying on is certainly not your bed. Fear clamps over your throat. That is when you begin the notice the pain in your abdomen..."

    console.log(content)

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    console.log(ele)
    $(ele).hide().appendTo(".description").each(function (i) {
        $(this).delay(50 * i).css({
            display: 'inline',
            opacity: 0,
        }).animate({
            opacity: 1,
            color: "white",
        }, 100);
    });
})