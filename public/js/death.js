$(".Begin").on("click", function (event) {
    event.preventDefault();
    localStorage.setItem("death", 0);
});

$("#submit-score").on("click", function (event) {

    event.preventDefault();

// This checks to see if the username input field is empty and if it is....
// it alerts the user with "Please enter a username".

    if (name.value == "") {
        alert ("Please enter a username")
    }   
        else { 
            let deathCounter = parseInt(localStorage.getItem("death"));
    
        //information that we will save to database
        const newUser = {
            username: $("#log-score").val().trim(),
            score: deathCounter
        };
        
        //connects to the /highscore route in exodus-controller.js and posts to the route
        $.ajax("/highscore", {
            type: "POST",
            data: newUser
        }).then(
            function(){
                console.log("new user created")
                location.reload();
            }
        )
    
        //The game is over now, set the local storage death count to default 0
        localStorage.setItem("death", 0)
    
        }
    }  
);