const typoVariation = ["BEG", "BEG_INT", "MID_INT", "END_INT", "END"];

const tasks = [
  {
    sentence: "The boy could not solve the problem so he asked for help.",
    question: "Did the boy ask for help?",
    answers: ["Yes", "No"],
    correctAnswer: 0,
    typoSentence: "",
  },

  {
    sentence: "rick riordan is a famous fantasy mythology author.",
    question: "what is his first most famous book?",
    answers: ["Percy Jackson", "I don't read books"],
    correctAnswer: 0,
    typoSentence: "",
  },

  {
    sentence: "My name is Steven Wu and I like to play Terraria.",
    question: "What game does Steven Wu like to play?",
    answers: ["MINECRAFT", "Terraria"],
    correctAnswer: 1,
    typoSentence: "",
  },
  {
    sentence: "Minecraft is a sandbox video game developed by Mojang. The game was created by Markus 'Notch' Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens 'Jeb' Bergensten taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active users as of 2021. In Minecraft, players explore a blocky, procedurally generated 3D world with virtually infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures, earthworks and simple machines. Depending on game mode, players can fight computer-controlled mobs, as well as cooperate with or compete against other players in the same world. Game modes include a survival mode, in which players must acquire resources to build the world and maintain health, and a creative mode where players have unlimited resources and access to flight. Players can modify the game to create new gameplay mechanics, items, and assets. Minecraft received critical acclaim, winning several awards and later being cited as one of the greatest video games of all time. Social media, parodies, adaptations, merchandise, and the annual Minecon conventions played large roles in popularizing the game. The game has also been used in educational environments to teach chemistry, computer-aided design, and computer science. In 2014, Mojang and the Minecraft intellectual property were purchased by Microsoft for US$2.5 billion. Several spin-offs have also been made, including Minecraft: Story Mode, Minecraft Dungeons, Minecraft Earth, and Minecraft Legends.",
    question: "Who was the creator of Minecraft",
    answers: ["Notch", "Dream"],
    correctAnswer: 0,
    typoSentence: "",
  },
  {
    sentence: "This program was created on June 29, 2022 by Steven Wu.",
    question: "When was this program?",
    answers: ["July 1", "June 29"],
    correctAnswer: 1,
    typoSentence: "",
  },
  {
    sentence: "Terraria is an action-adventure sandbox game developed by Re-Logic. The game was first released for Windows on May 16, 2011, and has since been ported to several other platforms. The game features exploration, crafting, building, painting, and combat with a variety of creatures in a procedurally generated 2D world. Terraria received generally positive reviews, with praise given to its sandbox elements. The game is one of the best-selling of all time, having sold over 44 million copies by 2022.",
    question: "When was Terraria created?",
    answers: ["May 10th 2011", "May 16, 2011"],
    correctAnswer: 1,
    typoSentence: "",
  },
  {
    sentence: "A train is traveling west to east at a speed of 300 km per hour. The driver applies the brake producing a deceleration of 1.4 m/s ^2 given the train weights three thousand ton.",
    question: "In newtons, how hard will the man in carriage 7 mash his face into the seat infront of him and realise most of the problems in his life are created not by external circumstances, but his own repeated self-sabotage given one ton equals 900 kilograms?",
    answers: ["1340 N", "1260 N"],
    correctAnswer: 1,
    typoSentence: "",
  },
  {
    sentence: "What are human tears made of.",
    question: "Are human tears primarily composed of:",
    answers: ["water", "a quiet admission that all of our plans and dreams will eventually turn to forgotten dust"],
    correctAnswer: 0,
    typoSentence: "",
  },
  {
    sentence: "Ava and James sometimes interact digitally. This month James has responded:4, 3, and 7 days after va's messages so as to give the impression he is uninterested despite being completely infatuated with her .",
    question: "What is James' median reply time and why will he live miserably ever after?",
    answers: ["5 days", "4 days"],
    correctAnswer: 1,
    typoSentence: "",
  },
  {
    sentence: "An intersection is a point where two lines cross over. Will and Claire intersect on a street. Claire is thinking -- do you know that I still love you, that I will always love you, that I was never as happy as things were good between us and I wish it could have worked and I'm just so sorry. Will is thinking -- not a day goes by where I do not remember your little and large kindneses, when i do not remember the new heights of happiness of happiness we both climbed together, and how sure we were that it could never go wrong until it all went wrong and I'm just so sorry.",
    question: "What will happen when Clair and Will meet?",
    answers: ["Their lines will never intersect again", "They live happily ever after."],
    correctAnswer: 0,
    typoSentence: "",
  },
  {
    sentence: "Text Over",
    question: "Please refresh to see results",
    answers: ["Ok", "No"],
    correctAnswer: 0,
    typoSentence: "",
  },
];

function setup(){
  changeTypo();
}

function changeTypo(){
  for (i = 0; i < tasks.length;i++){
    let randomTypo = typoVariation[Math.floor(Math.random() * 5)];
    currentSentence = tasks[i].sentence;
    tasks[i].typoSentence = injectTyposIntoSentence(randomTypo, currentSentence);
  }
}

function changeTypo2(){
    let randomTypo = typoVariation[Math.floor(Math.random() * 5)];
    currentSentence = tasks[currentQuestionIndex].sentence;
    tasks[currentQuestionIndex].typoSentence = injectTyposIntoSentence(randomTypo, currentSentence);
}
