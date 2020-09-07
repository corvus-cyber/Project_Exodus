//---------------scenario imports go here-------------------
import scenario_1 from "./scenarios/1_starting_scenario.js"
import scenario_2 from "./scenarios/2_scenario_hallway2.js"
import scenario_3 from "./scenarios/3_operation_scenario.js"
import scenario_4 from "./scenarios/4_office_scenario.js"
import scenario_5 from "./scenarios/5_foyer_scenario.js"
//Due to a quirk in the way the import works with us accessing the data you need to follow the schema below for pushing objects
let scenarios = [];
scenarios.push(scenario_1.scenario_1, scenario_2.scenario_2, scenario_3.scenario_3, scenario_4.scenario_4, scenario_5.scenario_5);
console.log(scenarios);
//-------------------global variables-------------------
let scenarioDesc = document.getElementById("scDesc")
let scenarioOpti = document.getElementById("scOpt")
let name = document.getElementById("log-score")
let errorElement =document.getElementById ("error")

let scenarioVal = 0;
let currentScen;
let optionVal = 0;
let selectedOpt = 0;

//player inventory
let hasKey = false;
let hasScalp = false;



// This checks to see if the username input field is empty and if it is....
// it alerts the user with "Please enter a username".



//This function increases the death count by 1
function updateDeath(){
    //get the current death count from local storage and add 1 to it
    let deathCounter = parseInt(localStorage.getItem("death")) + 1;
    // console.log(typeof deathCounter, "deathCounter in local storage before update");

    //set the new updated death count as the local storage
    localStorage.setItem("death", deathCounter);

    //take the user to the death page

    $(scenarioOpti.children).remove();

    let opt = `<button id="contDeath" type="button" class="btn btn-dark button-styling">Continue... </button>`
    scenarioOpti.insertAdjacentHTML("beforeend", opt);
    let toDeath = document.getElementById("contDeath")
    toDeath.addEventListener("click",function () {
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

function win(){



    $(scenarioOpti.children).remove();
    $(scenarioDesc.children).remove();

        window.location.replace("../../victory.html")
    return
    
};

function alpha(){
    renderScenarioOpt()
};


//-------------------delivery  system-----------------
scenarioOpti.addEventListener("click", renderScenarioOpt);
function renderScenarioOpt() {

    selectedOpt = parseInt(event.target.getAttribute('data'));
    console.log(selectedOpt);
    optionVal = selectedOpt
    scenarioVal = scenarios[scenarioVal].options[optionVal].toScenario



    //if same, rerender options
    if (currentScen === scenarioVal) {

        console.log("Same");

        //clears any currently shown answer and text options before rendering new ones
        $(scenarioOpti.children).remove();
        console.log("removed");

        //render options
        currentScen = scenarioVal

        //render option text
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

        if (scenarios[currentScen].options[optionVal].actions.includes("heartBeat")) {

            //Place heartbeat que here

        }
  

        if (scenarios[currentScen].options[optionVal].actions.includes("winState")) {
            console.log("You has died!!!!!");
            win();
        }


        if (scenarios[currentScen].options[optionVal].actions.includes("getKey")) {
            console.log("You has Key!!!!!");
            hasKey = true
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("getScalp")) {
            console.log("You has Scalp!!!!!");
            hasScalp = true
        }

        // if (scenarios[currentScen].options[optionVal].actions.includes("getScalp")) {
        //     console.log("You has Scalp!!!!!");
        //     hasScalp = true
        //     console.log(hasKey);
        // }

 

        if (scenarios[currentScen].options[optionVal].actions.includes("attackDoc")) {
            console.log("You attk Doc!!!!!");
            // if (hasScalp === true) {

            // }
        }

        if (scenarios[currentScen].options[optionVal].actions.includes("attackMon")) {
            console.log("You attk Mon!!!!!");
            if (hasScalp === true) {
                win(
                )
                    return
            }

        }
        

        if (scenarios[currentScen].options[optionVal].actions.includes("exit")) {
            
            if (hasKey === true) {
                console.log("You has Key!!!!!");
                selectedOpt = parseInt(event.target.getAttribute('data'));
                optionVal = selectedOpt
                scenarioVal = 4

                return secondaryRender()
            }
        }
        if (scenarios[currentScen].options[optionVal].actions.includes("killPlayer")) {
            console.log("You has died!!!!!");
            updateDeath();
            return
        }



        if (scenarios[currentScen].options[optionVal].actions.includes("selfDestruct")) {
            console.log("destruction!!!!!");
            scenarios[currentScen].options.splice(optionVal, 1)
        }
        //button renderer
        for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
            //renders the title of the option and sets data value to that options v
            let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
            scenarioOpti.insertAdjacentHTML("beforeend", opt);
        };
        console.log("created");


        return
    }
    //if  not same, render scenario
    else {

        console.log("Not Same");
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
        return
    }
};

function secondaryRender() {
    

    console.log("Secondary Render");
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
    return
}