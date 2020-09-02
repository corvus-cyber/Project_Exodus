$(document).ready(function() {
    $(".Begin").click(function(){
        window.location = $(this).find("a").attr("href");
        $("span").css("", "");
        return false;
    });



    var content = "Welcome to EXODUS, Team Undefined's venture into choose-your-own-adventure, with a sinister twist. While delving into the nightmare, make your choices carefully; the consequences can be dire. Best of Luck."

    console.log(content)

    var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

    console.log(ele)
    $(ele).hide().appendTo(".description").each(function (i) {
        $(this).delay(50 * i).css({
            display: 'inline',
            opacity: 0,
        }).animate({
            opacity: 1,
            color: "white",
        }, 100);
    });

    // Code used to make the timer occur 

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
    const minutes = Math.floor(time / 60);
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


    
    //SET INTERVAL THAT WILL Add Class 
    function runFade(){
        $(".door").removeClass("evaporate")
        $(".door").addClass("fade-in");
        function fadeOut() {
            setTimeout(function () {
                $(".door").removeClass("fade-in");
                $(".door").addClass("fade-out");
            }, 10000).then(()=>{
                $(".door").addClass("evaporate")
                })
                
            };
        fadeOut();    
    };
        

    runFade();

})