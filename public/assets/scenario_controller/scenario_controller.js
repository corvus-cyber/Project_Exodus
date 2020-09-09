//This File handles the delivery and actions of all scenarios

//---------------scenario imports go here-------------------
//This section is used to import the scenarios as objects to be rendered and handled 
import scenario_1 from "./scenarios/1_starting_scenario.js"
import scenario_2 from "./scenarios/2_scenario_hallway2.js"
import scenario_3 from "./scenarios/3_operation_scenario.js"
import scenario_4 from "./scenarios/4_office_scenario.js"
import scenario_5 from "./scenarios/5_foyer_scenario.js"
//Due to a quirk in the way the import works with us accessing the data you need to follow the schema below for pushing objects
let scenarios = [];
//store the scenarios as readily useable objects in an array
scenarios.push(scenario_1.scenario_1, scenario_2.scenario_2, scenario_3.scenario_3, scenario_4.scenario_4, scenario_5.scenario_5);
//-------------------global variables-------------------
//Prepare the global variables for the controller
let scenarioDesc = document.getElementById("scDesc")
let scenarioOpti = document.getElementById("scOpt")
let name = document.getElementById("log-score")
let errorElement = document.getElementById("error")

//scenario navigation variables
let scenarioVal = 0;
let currentScen;
let optionVal = 0;
let selectedOpt = 0;

//player inventory
let hasKey = false;
let hasScalp = false;



//This function increases the death count by 1 and handles routing of the death page
function updateDeath() {
    //get the current death count from local storage and add 1 to it
    let deathCounter = parseInt(localStorage.getItem("death")) + 1;

    //set the new updated death count as the local storage
    localStorage.setItem("death", deathCounter);

    //take the user to the death page

    $(scenarioOpti.children).remove();

    let opt = `<button id="contDeath" type="button" class="btn btn-dark button-styling">Continue... </button>`
    scenarioOpti.insertAdjacentHTML("beforeend", opt);
    let toDeath = document.getElementById("contDeath")
    toDeath.addEventListener("click", function () {
        window.location.replace("../../death.html")
    })
    return

}

//When the user beats the game and clicks on "escapte the Nightmare and enter your score", they will be taken to the highscore page
$("#submit-score").on("click", function (event) {
    event.preventDefault();
    // This checks to see if the username input field is empty and if it is....
    // it alerts the user with "Please enter a username".
    if (name.value == "") {
        errorElement.innerText = "Username cannot be empty!"
        name.focus()
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
            function () {
                location.reload();
            }
        )

        //The game is over now, set the local storage death count to default 0
        localStorage.setItem("death", 0)

    }
}
);

//This displays the winning text and and routes you to the victory.html
function win() {
    $(scenarioOpti.children).remove();
    $(scenarioDesc.children).remove();

    let winCont = ["You remember the scalpel you took from the operation room. It’s not much, but it’s better than nothing.",
        "The abomination approaches you. It grabs your left arm as you slash wildly with your right, slicing open one of it’s chest tubes open. Green liquid sprays everywhere and the monster lets out a cry. You slash again and again, cutting gashes in the tubes. The abomination shrieks, letting go of you as it’s limbs try in vain to stop the liquid from spilling.",
        "You run past the monster to the glass door. After a couple tries you find the right key, and the door opens.",
        "You exit the building, and find yourself within an empty parking lot, surrounded by a forest. Your breath makes warm, white vapors in the  cool, night air, and all the trees around you look like gnarled hands trying to grasp the full moon floating in the sky.",
        "You take off at a sprint, trying to put as much distance between you and the facility as possible. It doesn’t matter which direction you are headed, anywhere else is better than where you were. Your breathing becomes ragged, your throat dry and parched, your legs beg you to stop, still you run. Branches and bushes snag your gown as you run, ripping wide holes. You lose the scalpel and keys as you race with reckless abandon."]

    //Loops the text above to create the type effect
    for (let i = 0; i < winCont.length; i++) {
        let winC = winCont[i];

        let p = `<p id="scenPara_${i}"></p>`
        scenarioDesc.insertAdjacentHTML("beforeend", p);

        var ele = '<span>' + winC.split('').join('</span><span>') + '</span>';

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
    //creates the continue button and add it's listener
    let opt = `<button id="contWin" type="button" class="btn btn-dark button-styling">Continue... </button>`
    scenarioOpti.insertAdjacentHTML("beforeend", opt);
    contWin.addEventListener("click", function () {
        window.location.replace("../../victory.html")
    })
    return
    return

};

//-------------------delivery  system-----------------
//This is the main event, it renders a given scenario starting with zero.
//This function also handles specific actions
scenarioOpti.addEventListener("click", renderScenarioOpt);
function renderScenarioOpt() {

    selectedOpt = parseInt(event.target.getAttribute('data'));
    optionVal = selectedOpt
    scenarioVal = scenarios[scenarioVal].options[optionVal].toScenario



    //if same, rerender options
    if (currentScen === scenarioVal) {
        //if statements here handle the actions outlined in the arrays contained in the scenarios themselves to make it easier to create no scenarios

        //clears any currently shown answer and text options before rendering new ones
        $(scenarioOpti.children).remove();

        //render options
        currentScen = scenarioVal
    
        let content;
        //without this the content will start with "undefined"
        content = "";
        //render option text
        $(scenarioDesc.children).remove();
        for (let i = 0; i < scenarios[scenarioVal].options[optionVal].text.length; i++) {
            content = scenarios[scenarioVal].options[optionVal].text[i];

            let p = `<p id="scenPara_${i}"></p>`
            scenarioDesc.insertAdjacentHTML("beforeend", p);

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

        if (scenarios[currentScen].options[optionVal].actions.includes("heartBeat")) {

            //Place heartbeat que here
            let heartBeat = new Audio ('../assets/sounds/heartbeat.mp3');
            heartBeat.play();
        }


        if (scenarios[currentScen].options[optionVal].actions.includes("winState")) {
            win();
        }


        if (scenarios[currentScen].options[optionVal].actions.includes("getKey")) {
            hasKey = true
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("getScalp")) {
            hasScalp = true
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("attackDoc")) {
            if (hasScalp === true) {
                $(scenarioDesc.children).remove();
                var kill = "You launch yourself at the doctor, scalpel in hand. With a growl, you slash at his back, opening a wide gash. The doctor turns you look at you, bloodshot eyes blazing with rage. He knocks the scalpel from your hand and kicks you in the stomach. You double over, falling backwards. The doctor grabs a pair of scissors from the table, leaps on top of you and begins stabbing you over and over..."
                var ele = '<span>' + kill.split('').join('</span><span>') + '</span>';
                $(ele).hide().appendTo("#scDesc").each(function (i) {
                    $(this).delay(50 * i).css({
                        display: 'inline',
                        opacity: 0,
                    }).animate({
                        opacity: 1,
                        color: "white",
                    }, 100);
                });

            }
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("attackMon")) {
            if (hasScalp === true) {
                win(
                )
                return
            }

        }

        if (scenarios[currentScen].options[optionVal].actions.includes("exit")) {

            if (hasKey === true) {
                selectedOpt = parseInt(event.target.getAttribute('data'));
                optionVal = selectedOpt
                scenarioVal = 4

                return secondaryRender()
            }
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("killPlayer")) {
            updateDeath();
            return
        }



        if (scenarios[currentScen].options[optionVal].actions.includes("selfDestruct")) {
            scenarios[currentScen].options.splice(optionVal, 1)
        }
        //button renderer
        for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
            //renders the title of the option and sets data value to that options v
            let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
            scenarioOpti.insertAdjacentHTML("beforeend", opt);
        };
        return
    }
    //if  not same, render scenario
    else {
        currentScen = scenarioVal
        //clears any currently shown answer and text options before rendering new ones
        $(scenarioOpti.children).remove();

        //render options
        for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
            //renders the title of the option and sets data value to that options v
            let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
            scenarioOpti.insertAdjacentHTML("beforeend", opt);
        }


        let content;
        //without this the content will start with "undefined"
        content = "";
        //render text
        // for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
        //     //renders the title of the option and sets data value to that options v
        //     let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
        //     scenarioOpti.insertAdjacentHTML("beforeend", opt);
        // }


        $(scenarioDesc.children).remove();
        for (let i = 0; i < scenarios[scenarioVal].text.length; i++) {
            content = scenarios[scenarioVal].text[i];

            let p = `<p id="scenPara_${i}"></p>`
            scenarioDesc.insertAdjacentHTML("beforeend", p);


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
        return
    }
};

function secondaryRender() {
    currentScen = scenarioVal
    //clears any currently shown answer and text options before rendering new ones
    $(scenarioOpti.children).remove();

    //render options
    for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
        //renders the title of the option and sets data value to that options v
        let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
        scenarioOpti.insertAdjacentHTML("beforeend", opt);
    }


    let content;
    //without this the content will start with "undefined"
    content = "";
    //render text
    // for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
    //     //renders the title of the option and sets data value to that options v
    //     let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
    //     scenarioOpti.insertAdjacentHTML("beforeend", opt);
    // }


    $(scenarioDesc.children).remove();
    for (let i = 0; i < scenarios[scenarioVal].text.length; i++) {
        content = scenarios[scenarioVal].text[i];

        let p = `<p id="scenPara_${i}"></p>`
        scenarioDesc.insertAdjacentHTML("beforeend", p);


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
    return
}