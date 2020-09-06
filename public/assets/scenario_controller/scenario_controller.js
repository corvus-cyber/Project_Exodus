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
let name = document.getElementById("log-score")

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
$("#highscore-button").on("click", function(event){
    console.log("connected");
    event.preventDefault();

    //connects to the /highscore route in exodus-controller.js and posts to the route
    $.ajax("/highscore", {
        type: "GET"
    }).then(
        function(){
            console.log("You won, redirecting to the highscore page")
        })
});

function win(){
    window.location.replace("../../victory.html")
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


        if (scenarios[currentScen].options[optionVal].actions.includes("killPlayer")) {
            console.log("You has died!!!!!");
            updateDeath();
            return
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
            // if (hasScalp === true) {

            // }
        }
        


        // if (scenarios[currentScen].options[optionVal].actions.includes("timer")) {
        //     console.log("");
        //     let timer = document.getElementById("app")
        //     timer.classList.remove("evaporate")

        //     // Timer Function
        //     function timerLapse() {
        //         const FULL_DASH_ARRAY = 283;
        //         const WARNING_THRESHOLD = 10;
        //         const ALERT_THRESHOLD = 5;

        //         const COLOR_CODES = {
        //             info: {
        //                 color: "white"
        //             },
        //             warning: {
        //                 color: "#F5F5F5",
        //                 threshold: WARNING_THRESHOLD
        //             },
        //             alert: {
        //                 color: "#C0C0C0",
        //                 threshold: ALERT_THRESHOLD
        //             }
        //         };

        //         const TIME_LIMIT = 10;
        //         let timePassed = 0;
        //         let timeLeft = TIME_LIMIT;
        //         let timerInterval = null;
        //         let remainingPathColor = COLOR_CODES.info.color;
        //         document.getElementById("app").innerHTML = `
        // <div class="base-timer">
        // <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        //     <g class="base-timer__circle">
        //     <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        //     <path
        //         id="base-timer-path-remaining"
        //         stroke-dasharray="283"
        //         class="base-timer__path-remaining ${remainingPathColor}"
        //         d="
        //         M 50, 50
        //         m -45, 0
        //         a 45,45 0 1,0 90,0
        //         a 45,45 0 1,0 -90,0
        //         "
        //     ></path>
        //     </g>
        // </svg>
        // <span id="base-timer-label" class="base-timer__label">${formatTime(
        //             timeLeft
        //         )}</span>
        // </div>
        // `;

        //         startTimer();

        //         function onTimesUp() {
        //             updateDeath()
        //             clearInterval(timerInterval);
        //         }

        //         function startTimer() {
        //             timerInterval = setInterval(() => {
        //                 timePassed = timePassed += 1;
        //                 timeLeft = TIME_LIMIT - timePassed;
        //                 document.getElementById("base-timer-label").innerHTML = formatTime(
        //                     timeLeft
        //                 );
        //                 setCircleDasharray();
        //                 setRemainingPathColor(timeLeft);
        //                 scenarioOpti.addEventListener("click", function () {
        //                     return
        //                 });
        //                 if (timeLeft === 0) {
        //                     onTimesUp();
        //                 };
        //             }, 1000);
        //         }

        //         function formatTime(time) {
        //             let seconds = time % 60;

        //             if (seconds < 10) {
        //                 seconds = `0${seconds}`;
        //             }

        //             return `${seconds}`;
        //         }

        //         function setRemainingPathColor(timeLeft) {
        //             const { alert, warning, info } = COLOR_CODES;
        //             if (timeLeft <= alert.threshold) {
        //                 document
        //                     .getElementById("base-timer-path-remaining")
        //                     .classList.remove(warning.color);
        //                 document
        //                     .getElementById("base-timer-path-remaining")
        //                     .classList.add(alert.color);
        //             } else if (timeLeft <= warning.threshold) {
        //                 document
        //                     .getElementById("base-timer-path-remaining")
        //                     .classList.remove(info.color);
        //                 document
        //                     .getElementById("base-timer-path-remaining")
        //                     .classList.add(warning.color);
        //             }
        //         }

        //         function calculateTimeFraction() {
        //             const rawTimeFraction = timeLeft / TIME_LIMIT;
        //             return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        //         }

        //         function setCircleDasharray() {
        //             const circleDasharray = `${(
        //                 calculateTimeFraction() * FULL_DASH_ARRAY
        //             ).toFixed(0)} 283`;
        //             document
        //                 .getElementById("base-timer-path-remaining")
        //                 .setAttribute("stroke-dasharray", circleDasharray);
        //         }
        //     }
        //     timerLapse();
        // }

        if (scenarios[currentScen].options[optionVal].actions.includes("exit")) {
            
            if (hasKey === true) {
                console.log("You has Key!!!!!");
                selectedOpt = parseInt(event.target.getAttribute('data'));
                optionVal = selectedOpt
                scenarioVal = 1

                return secondaryRender()
            }
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