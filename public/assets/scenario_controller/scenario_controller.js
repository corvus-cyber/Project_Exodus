
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


// let deathCounter = 0;
$(".Begin").on("click", function(event){
    event.preventDefault();
    localStorage.setItem("death", 0)
})

$("#submit-score").on("click", function(event){
    
    event.preventDefault();
    //manually set local storage "death" value to 0
    // 1 of line 29 and 30 should clear the local storage when we click sign death certificate button.
    // sessionStorage.removeItem("death")
    // localstorage.clear();
    // console.log(deathCounter);
    let deathCounter = parseInt(localStorage.getItem("death"));
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

function updateDeath(){
    let deathCounter = parseInt(localStorage.getItem("death")) + 1;
    //manually set local storage "death" value to 0 in the submit event listener
    //deathCounter holds the value to what's in local storage, localStorage.getItem
    // add 1 to deathCounter
    console.log(typeof deathCounter, "deathCounter in local storage before update");
    localStorage.setItem("death", deathCounter)
}




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
   //         console.log(deathCounter);
        }
        if (scenarios[currentScen].options[optionVal].actions.includes("timer")) {
            console.log("");
            let timer = document.getElementById("app")
            timer.classList.remove("evaporate")
                // Timer Function
    function timerLapse(){
        const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;

        const COLOR_CODES = {
        info: {
            color: "white"
        },
        warning: {
            color: "#F5F5F5",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "#C0C0C0",
            threshold: ALERT_THRESHOLD
        }
        };

        const TIME_LIMIT = 10;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        let remainingPathColor = COLOR_CODES.info.color;
        document.getElementById("app").innerHTML = `
        <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
            timeLeft
        )}</span>
        </div>
        `;

        startTimer();

        function onTimesUp() {
        clearInterval(timerInterval);
        }

        function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
            onTimesUp();
            }
        }, 1000);
        }

        function formatTime(time) {
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${seconds}`;
        }

        function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
        }
        }

        function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }

        function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
        }
    }
    timerLapse();
   //         console.log(deathCounter);
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