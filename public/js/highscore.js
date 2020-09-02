let deathCounter = 0;

function updateDeath(){
    deathCounter += 1;
}

$("#submit-score").on("click", function(event){
    event.preventDefault();

    const newUser = {
        username: $("#log-score").val().trim(),
        score: deathCounter
    };
    
    $.ajax("/highscore", {
        type: "POST",
        data: newUser
    }).then(
        function(){
            console.log("new user created")
            location.reload();
        }
    )
})



