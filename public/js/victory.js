$(document).ready(function () {
    $(".Begin").click(function () {
        window.location = $(this).find("a").attr("href");
        $("span").css("", "");
        return false;
    });

    function runDoorFade() {
        $(".door").removeClass("evaporate")
        $(".door").addClass("fade-in");
        function fadeOut() {
            setTimeout(function () {
                $(".door").removeClass("fade-in");
                $(".door").addClass("fade-out");
                setTimeout(function () {
                    $(".door").addClass("evaporate");
                    $(".door").removeClass("fade-out");
                }, 8000);
            }, 10000)
        };
        fadeOut();

    };

    let finalPage = document.getElementById("winText")
    let winContent = ["“Officer 6J11 requesting medical assistance on Old Park Road.”", "“Copy that, Greg. What’s their condition?”", "“We have a 10-71, several shots to the chest. Some crazy tried to attack...Hold on, he’s got stitches everywhere...Looks like someone was grafting skin all over this fella. Oh God, some of it’s rotten”", "“Help is on the way, Officer. Just sit tight.”", "“Co….Hey, who are….Oh God, what is that thing??”", "“Officer? What’s going on?”", "“No, stay back! Stay bac….”", "“6J11, are you code 4?”", "“...”", "“All units, Code 30. Officer 6J11 unresponsive, respond to Old Park Road..."]

    
    for (let i = 0; i < winContent.length; i++) {
        content = winContent[i];

        let p = `<p id="scenPara_${i}"></p>`
        finalPage.insertAdjacentHTML("beforeend", p);


        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo("#scenPara_" + i + "").each(function (i) {
            $(this).delay(50 * i).css({
                display: 'inline',
                opacity: 0,
            }).animate({
                opacity: 1,
                color: "white",
            }, 100);
        });
    }

    runDoorFade();
})