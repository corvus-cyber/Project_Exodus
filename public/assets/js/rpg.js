$(document).ready(function() {
    $(".Begin").click(function(){
        window.location = $(this).find("a").attr("href");
        return false;
    });
})