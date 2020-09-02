
//---------------scenario imports go here-------------------
import scenario_1 from "./scenarios/1_starting_scenario.js"
import scenario_2 from "./scenarios/2_scenario_hallway2.js"
import scenario_3 from "./scenarios/3_operation_scenario.js"
//Due to a quirk in the way the import works with us accessing the data you need to follow the schema below for pushing objects
let scenarios = [];
scenarios.push(scenario_1.scenario_1, scenario_2.scenario_2, scenario_3.scenario_3);
console.log(scenarios);
//-------------------global variables-------------------
let scenarioDesc = document.getElementById("scDesc")
let scenarioOpti = document.getElementById("scOpt")

let scenarioVal = 0;
let currentScen;
let optionVal =0;
let selectedOpt =0;


let deathCounter = 0;



function updateDeath(){
    deathCounter += 1;
    console.log(deathCounter);
}

$("#submit-score").on("click", function(event){
    event.preventDefault();
    console.log(deathCounter);
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
});


//-------------------delivery  system-----------------
scenarioOpti.addEventListener("click", renderScenarioOpt);
function renderScenarioOpt() {

    selectedOpt = parseInt(event.target.getAttribute('data'));
    optionVal = selectedOpt
    scenarioVal = scenarios[scenarioVal].options[optionVal].toScenario
        
    console.log(selectedOpt);
    //if same, rerender options
    if (currentScen === scenarioVal) {
        console.log("Same");
        console.log(currentScen+"current");
        console.log(scenarioVal+"scen val");

        //clears any currently shown answer and text options before rendering new ones
        $(scenarioOpti.children).remove();
        console.log("Buttons Removed");
        
        
        

        //render options
        currentScen = scenarioVal


        //render option text
        let content;

        //without this the content will start with "undefined"
        content = "";
        //console.log("scenval"+scenarioVal)
        $(scenarioDesc.children).remove();
        for (let i = 0; i < scenarios[scenarioVal].options[optionVal].text.length; i++) {
            content += scenarios[scenarioVal].options[optionVal].text[i] + " ";
        }

        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo(".description").each(function (i) {
            $(this).delay(1 * i).css({
                display: 'inline',
                opacity: 0,
            }).animate({
                opacity: 1,
                color: "white",
            }, 100);
        });


        if (scenarios[currentScen].options[optionVal].actions.includes("killPlayer")) {
            console.log("You has died!!!!!");
            updateDeath()
            console.log(deathCounter);
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
        }
        console.log("Buttons Created");

    }
    //if  not same, render scenario
    else {
        console.log("Not Same");
        console.log(currentScen+"current");
        console.log(scenarioVal+"scen val");
        currentScen = scenarioVal
        console.log(scenarioVal);
        //clears any currently shown answer and text options before rendering new ones
        $(scenarioOpti.children).remove();
        console.log("Buttons Removed");
        //render options
        for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
            //renders the title of the option and sets data value to that options v
            let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
            scenarioOpti.insertAdjacentHTML("beforeend", opt);
        }
        console.log("Buttons Created");

        let content;
        //without this the content will start with "undefined"
        content = "";
        //render text

        $(scenarioDesc.children).remove();
        for (let i = 0; i < scenarios[scenarioVal].text.length; i++) {
            content += scenarios[scenarioVal].text[i] + " ";
            
        }

        var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

        $(ele).hide().appendTo(".description").each(function (i) {
            $(this).delay(1 * i).css({
                display: 'inline',
                opacity: 0,
            }).animate({
                opacity: 1,
                color: "white",
            }, 100);
        });
        return

    }








    //prepares the content variable



    // if current val is not = to scenval render scenario, else render option 

    //listen to options
    //scenarioOpti.addEventListener("click", function (event) {
    //remove options
    //$(scenarioDesc.children).remove();
    //get the value of which option was selected




    //return renderScenarioOpt()

    //});

};