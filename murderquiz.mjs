import QuestionType from "./questiontype.mjs";

export default class MurderQuiz {
  constructor() {
    this.questionIndex = 0;
    this.name = "";



    this.methods = new Map();

    this.methods.set("poison", 0);
    this.methods.set("axe", 0);
    this.methods.set("dynamite", 0);
    this.methods.set("sword", 0);
    this.methods.set("knife", 0);
    this.methods.set("gun", 0);
    this.methods.set("strangle", 0);
    
  }


  quiz = [
  {
    title: "Enter your name:",
    questions: [
      {
        type: QuestionType.OTHER,
        text: "Enter here",
        img: "",
        action: () => {
        }
      }
    ]
  },
  {
    title: "How do you generally prefer to enjoy things?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Slowly",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Quickly",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "If you had to fire somebody, would you do it:",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "In person",
        img: "",
        action: () => {
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "By email",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "If a restaurant served you food that was too salty, would you complain?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Yes",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "No",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "Cats or Dogs?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Cats",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Dogs",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "Do you often do things to get a reaction out of people?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Yes",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "No",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "Which matters more: getting something done, or getting it done in style?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Getting it done",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Style",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "How much do you value honor?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Honor is one of the highest values",
        img: "",
        action: () => {
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Honor is valuable, but sometimes one must do slightly backhand things for good",
        img: "",
        action: () => {
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Honor is worthless",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "Do you like to cook?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Yes",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "No",
        img: "",
        action: () => {
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "What do you think of noise?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Noise is just fine, quiet places are usually boring",
        img: "",
        action: () => {
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "No real opinion",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Prefer the quiet",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "How do you usually approach a problem?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Brute force",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Strategy",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "How much do you care about fame?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "I'd love to be famous",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Don't really care",
        img: "",
        action: () => {
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Would avoid fame if I could",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "How do you consider risk",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Usually take risks",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Average risk avoidance",
        img: "",
        action: () => {
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Generally avoid risk",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      }
    ]
  },
  {
    title: "Do you strive for grace or strength when accomplishing a task?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Grace",
        img: "",
        action: () => {
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Strength",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1);
        }
      }
    ]
  }
  ]


  nextQuestion() {
    return this.quiz[this.questionIndex++];
  }

  getData() {

    // console.log(this.methods);


    const sortedMap = Array.from(this.methods).sort((a, b) => b[1] - a[1]);
    
    let finalValue = sortedMap[0][0];

    let returnVal = "From the results of the survey, your preferred method of murder is: ";
    if (finalValue == "poison") {
      returnVal += "Poison! You're the kind of person to stay out of the action, if possible. You love the satisfaction of poisoning a bit of food, and hearing of your victim's death days later.";
    }
    if (finalValue == "axe") {
      returnVal += "Axe murder! You have a fondness for tradition. You love inspiring terror, and you aren't afraid to cause a little chaos. You also probably like pineapple.";
    }
    if (finalValue == "axe") {
      returnVal += "Dynamite! You're the kind of person who likes to put on a show. You go for complete victory, and probably walk away from explosions without looking back.";
    }
    if (finalValue == "sword") {
      returnVal += "Killing with a sword! You probably like ";
    }

    return this.methods;

    return {
      method: finalValue
    }
  }

  takeOther(data) {
    this.name = data;
  }
  


}