
//---------------scenario imports go here-------------------
import scenario_1 from "./scenarios/1_starting_scenario.js"
import scenario_2 from "./scenarios/2_scenario_hallway2.js"
import scenario_3 from "./scenarios/3_operation_scenario.js"
//Due to a quirk in the way the import works with us accessing the data you need to follow the schema below for pushing objects
let scenarios = [];
scenarios.push(scenario_1.scenario_1, scenario_2.scenario_2, scenario_3.scenario_3);

//-------------------global variables-------------------
let scenarioDesc = document.getElementById("scDesc")
let scenarioOpti = document.getElementById("scOpt")

console.log(scenarios);

let scenarioVal = 0;
let optionVal = 0;


//-------------------delivery  system-----------------
scenarioOpti.addEventListener("click", renderScenario)

function renderScenario() {
    //clears any currently shown answer options before rendering new ones
    $(scenarioOpti.children).remove();

    for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
        let opt = `<button type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title}</button>`
        scenarioOpti.insertAdjacentHTML("beforeend", opt);
    }
    console.log(scenarioOpti.children);
    scenarioOpti.addEventListener("click", function(event){
   
        console.log(event.target.textContent);
    });

    

    // console.log(questionDescription.textContent = questions[whichQuestion].description)

    // //For loop that iterates through questions array and creates a new button for each one
    // for (let i = 0; i < questions[whichQuestion].answers.length; i++) {
    //     let answerOptions = document.createElement("a");
    //     answerOptions.className = "btn btn-primary answerBtn";
    //     answerOptions.id = "answer " + i;
    //     answerOptions.textContent = questions[whichQuestion].answers[i];
    //     questionLocation.appendChild(answerOptions);
    // }
};


function optionSelect(a) {
    console.log(a)
}




