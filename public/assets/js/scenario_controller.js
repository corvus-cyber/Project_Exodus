$(document).ready(function () {
    let scenarioDesc = document.getElementById("scDesc")
    let scenarioOpti = document.getElementById("scOpt")


    let scenarioVal = 0;
    let optionVal = 0;


    //---------------------story json objs------------------
    let scenarios = {
        id: "scenario_1",
        title: "",
        text: [
            "The first thing you notice when you awaken is a deep, aching pain throughout your entire body. Your head throbs painfully, as though it were being squeezed in a vice grip. You look down and notice that all you are wearing is a soiled hospital gown, covered with stains from God knows what. You are lying on some kind of hospital bed that’s been stained with blood, some of it fresh.",
            "Slowly, you lift yourself to an upright sitting position. A soft, cold breeze whistles through the cracks of a boarded window behind you.",
            "A single flickering light faintly illuminates the room. The white paint on the walls is peeling, and the parts that aren’t are covered in graffiti. Pools of dark ichor cover the floor, faintly reflecting the light above. Several  syringes lie scattered across the floor, some of them partially filled with unknown liquids.",
            "You slowly slide off the bed onto your feet. The cold tiles beneath you send a shiver up your spine. You can’t remember anything about how you got here or who you even are. You quickly scan the room for anything of use. Beside you resting on a rusted metal table is what appears to be an open journal of some kind, as well as what seem to be several rolls of bandages. A solitary metal door stands across the room from you.",
            "What do you do?"
        ],
        options: [
            {
                id: "option_1",
                title: "Look down and Examine Yourself",
                text: ["You look down to better gauge your physical state, and it becomes instantly clear why you ache so much. Your arms and legs are covered in stitches surrounding patches of skin that are clearly not your own. Some of them are light, others are dark. One patch on your right arm appears to be rotten and decaying."],
                killPlayer: false
            },
            {
                id: "option_2:",
                title: "Grab the Bandages",
                text: ["It appears that some of your stitches are still seeping blood and plasma. You quickly grab the bandages on the table and wrap your wounds. Not the best job, but it’ll work for now."],
                killPlayer: false
            },
            {
                id: "option_3",
                title: "Look Through the Journal",
                text: [""],
                killPlayer: false
            },
            {
                id: "option_4",
                title: "Go Through the Door",
                text: [""],
                killPlayer: false
            }]


    }

    

    //-------------------delivery  system-----------------
    scenarioOpti.addEventListener("click", renderScenario)

    function renderScenario() {
        //clears any currently shown answer options before rendering new ones
        console.log("test")
        $(scenarioOpti.children[0]).remove();
       
        for (let i = 0; i < scenarios.options.length; i++) {
            let opt = `<button type="button" class="btn btn-dark button-styling">${scenarios.options[i].title}</button>`
            scenarioOpti.insertAdjacentHTML("beforeend",opt)  
        }

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
    //renderScenario()




});