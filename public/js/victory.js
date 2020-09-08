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


let winContent = [
    
]

$(scenarioDesc.children).remove();
        for (let i = 0; i < scenarios[scenarioVal].text.length; i++) {
            content = scenarios[scenarioVal].text[i];
            
            let p = `<p id="scenPara_${i}"></p>`
            scenarioDesc.insertAdjacentHTML("beforeend", p);
            
           
            var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

            $(ele).hide().appendTo("#scenPara_"+i+"").each(function (i) {
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