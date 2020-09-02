let scenario_3={
    id: 3,
    title: "",
    text: [
        "The door is just wide enough for you to squeeze through without making much sound, but as you step into something cold and wet, you quickly wish you hadn’t. The entire floor is covered with spatterings of blood and bile, almost as if someone had tried to make a Jackson Pollock painting on the floor.",
        "The only light in the room flows from the surgical light apparatus shining down upon the operating room table, illuminating what looks to be a large white and brown dog. It’s side has been sliced open, its flesh held open by skinny hooks, while numerous colored tubs stretch from large whirring machines, connecting to various parts of the dog’s insides.",
        "Standing above the dog is what appears to be a doctor, bent over the operating table rummaging through the dog’s insides. His back is turned towards you as he is completely focused on his work. The dog manages to look up at the doctor, it’s eyes pleading. Your heart skips a beat as the dog opens its mouth….and begins to speak.",
        '“Da---ddy….It Hurts…”',
        '“Now, now, Nina,” the doctor said in hushed, caring tones, “We’ll make you better yet. Trust Daddy.”',
        "What do you do?"
    ],
    options: [
        {
            id: 1,
            title: "sec3testne Yourself",
            text: ["You look down to better gauge your physical state, and it becomes instantly clear why you ache so much. Your arms and legs are covered in stitches surrounding patches of skin that are clearly not your own. Some of them are light, others are dark. One patch on your right arm appears to be rotten and decaying."],
            actions:[],
            toScenario: 1
        },
        {
            id: 2,
            title: "sec3test",
            text: ["It appears that some of your stitches are still seeping blood and plasma. You quickly grab the bandages on the table and wrap your wounds. Not the best job, but it’ll work for now."],
            actions:["selfDestruct",
            ],
            toScenario: 1
        },
        {
            id: 3,
            title: "sec3testurnal",
            text: [""],
            actions:[],
            toScenario: 1
        },
        {
            id: 4,
            title: "sec3test",
            text: [""],
            actions:[],
            toScenario: 1
        }]
};
export default {scenario_3};