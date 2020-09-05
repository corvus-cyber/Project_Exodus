let scenario_5={
    id: 4,
    title: "",
    text: [
        "It takes you a few moments to find the correct key, but you finally unlock the door. You open the door and step through. You find yourself in a room that is illuminated only by the pale moonlight shining through the windows on the far wall.",
        "After a moment, you realize that you are in some sort of waiting room, or what’s left of it. Faded magazines line the floor, aged couches with rips and stitches are strewn about the room, the ceiling seems to be caving in at one spot. Straight ahead is a glass door. Surely that has to be the exit.",
        "You hear a groaning ahead of you. You turn and gasp as a hulking mass emerges from the shadows, an ungodly abomination with body parts stitched all over it. Multiple arms protrude from its torso, its many gnarled fingers reach towards you. A mass of tubes are attached to its chest, transporting some sort of liquid. Metal rods protrude from its joints, causing the abomination to shamble awkwardly.",
        '“No One Leaves….” It groans as it begins to walk towards you, “Doctor’s orders.”',
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Look for Something Useful",
            text: ["You quickly scan the room. To your immediate left is a sink, rusted and stained. Lying in the sink is a bloodied scalpel. You slowly reach over and pick up the scalpel. You never know when you might need this. The doctor hasn’t noticed you yet."],
            actions:["selfDestruct",],
            toScenario: 2
        },
        {
            id: 2,
            title: "Attack the Doctor",
            text: ["Despite yourself, you feel a rage growing deep inside your gut. This man is sick, and someone needs to stop him.",
                    "You launch yourself at the doctor, landing on his back and begin pounding his head with your fists. With a single fluid motion, the doctor grabs your wrist and throws you to the ground. You land flat on your back, and feel the wind forcibly expelled from your lungs.",
                    '“I see the solution didn’t work.” Genuine regret permeates the doctor’s voice “That’s really too bad. I had high hopes for you.”',
                    "You try to get up, but the doctor places his foot on your chest, holding you to the floor. You wriggle and writhe, desperately clawing at his pant legs in vain. You see the doctor pick up a brown cylinder with multiple needles on one end. With a grunt, the doctor rams the device into your neck. You gasp as you feel something cold spread throughout your body. The room begins to spin and darken. Just as everything goes black you hear,",
                    '“We’ll just have to try again.”'],
            altText:["You launch yourself at the doctor, scalpel in hand. With a growl, you slash at his back, opening a wide gash. The doctor turns you look at you, bloodshot eyes blazing with rage. He knocks the scalpel from your hand and kicks you in the stomach. You double over, falling backwards. The doctor grabs a pair of scissors from the table, leaps on top of you and begins stabbing you over and over..."],
            actions:["killPlayer", "attackDoc"],
            toScenario: 2
        },
        {
            id: 3,
            title: "Leave the Room",
            text: [""],
            actions:[],
            toScenario: 1
        },
        ]
};
export default {scenario_3};