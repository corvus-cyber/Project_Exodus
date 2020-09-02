
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
    //clears any currently shown answer and text options before rendering new ones
    $(scenarioOpti.children).remove();
    
    //render options
    for (let i = 0; i < scenarios[scenarioVal].options.length; i++) {
        //renders the title of the option and sets data value to that options v
        let opt = `<button data=${i} type="button" class="btn btn-dark button-styling">${scenarios[scenarioVal].options[i].title} </button>`
        scenarioOpti.insertAdjacentHTML("beforeend", opt);
    }

    //listen to options
    scenarioOpti.addEventListener("click", function(event){
        //remove options
        $(scenarioDesc.children).remove();
        //
        let selectedOpt = parseInt(event.target.getAttribute('data'));
        optionVal = selectedOpt
        console.log("optval "+optionVal);

        for (let i = 0; i < scenarios[scenarioVal].text.length; i++) {
            var content = scenarios[scenarioVal].text[i];

            var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

            $(ele).hide().appendTo(".description").each(function (i) {
                $(this).delay(50 * i).css({
                    display: 'inline',
                    opacity: 0,
                }).animate({
                    opacity: 1,
                    color: "white",
                }, 100);
            });
        }


        scenarioVal = scenarios[scenarioVal].options
        console.log["scenval"+scenarioVal]
        
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