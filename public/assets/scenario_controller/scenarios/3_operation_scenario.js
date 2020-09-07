let scenario_3={
    id: 2,
    title: "",
    text: [
        "The door is just wide enough for you to squeeze through without making much sound, but as you step into something cold and wet, you quickly wish you hadn’t. The entire floor is covered with spatterings of blood and bile, almost as if someone had tried to make a Jackson Pollock painting on the floor.",
        "The only light in the room flows from the surgical light apparatus shining down upon the operating room table, illuminating what looks to be a large white and brown dog. It’s side has been sliced open, its flesh held open by skinny hooks, while numerous colored tubs stretch from large whirring machines, connecting to various parts of the dog’s insides.",
        "Standing above the dog is what appears to be a doctor, bent over the operating table rummaging through the dog’s insides. His back is turned towards you as he is completely focused on his work. The dog manages to look up at the doctor, it’s eyes pleading. Your heart skips a beat as the dog opens its mouth….and begins to speak.",
        '“Da---ddy….It Hurts…”',
        '“Now, now, Nora,” the doctor said in hushed, caring tones, “We’ll make you better yet. Trust Daddy.”',
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "Look for Something Useful",
            text: ["You quickly scan the room. To your immediate left is a sink, rusted and stained. Lying in the sink is a bloodied scalpel. You slowly reach over and pick up the scalpel. You never know when you might need this. The doctor hasn’t noticed you yet."],
            actions:["selfDestruct", "getScalp","heartBeat"],
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