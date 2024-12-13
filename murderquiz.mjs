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
          this.methods.set("poison", (this.methods.get("poison") || 0) + 3.00009);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 3.001);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Quickly",
        img: "",
        action: () => {
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1.00006);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1.65);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 2.004);
          this.methods.set("poison", (this.methods.get("poison") || 0) - 2);
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
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1.923);
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
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1.0008);
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
          this.methods.set("axe", (this.methods.get("axe") || 0) + 2);
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
          this.methods.set("knife", (this.methods.get("knife") || 0) + 1.0202);
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
          this.methods.set("poison", (this.methods.get("poison") || 0) + 2);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 3);
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
          this.methods.set("sword", (this.methods.get("sword") || 0) + 5);
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
          this.methods.set("axe", (this.methods.get("axe") || 0) + 5.12);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 3);
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
          this.methods.set("axe", (this.methods.get("axe") || 0) + 2);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 2);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 5);
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
          this.methods.set("sword", (this.methods.get("sword") || 0) + 7.1);
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
          this.methods.set("sword", (this.methods.get("sword") || 0) - 1);
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
          this.methods.set("sword", (this.methods.get("sword") || 0) - 20);
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
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1.0001);
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
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 6.09);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 2);
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
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) - 5);
          this.methods.set("gun", (this.methods.get("gun") || 0) - 2);
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
          this.methods.set("poison", (this.methods.get("poison") || 0) + 3);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 2);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 2);
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
          this.methods.set("axe", (this.methods.get("axe") || 0) + 3);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 3);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 3);
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
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1.234);
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
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1.002);
          this.methods.set("sword", (this.methods.get("sword") || 0) + 1);
          this.methods.set("poison", (this.methods.get("poison") || 0) - 3);
          this.methods.set("knife", (this.methods.get("knife") || 0) - 2);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Average risk avoidance",
        img: "",
        action: () => {
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 1);
          this.methods.set("dynamite", (this.methods.get("dynamite") || 0) + 1.0005);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Generally avoid risk",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 3);
          this.methods.set("knife", (this.methods.get("knife") || 0) + 2);
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
          this.methods.set("sword", (this.methods.get("sword") || 0) + 2.0604);
          this.methods.set("strangle", (this.methods.get("strangle") || 0) + 4.0004);
          this.methods.set("gun", (this.methods.get("gun") || 0) + 1);
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Strength",
        img: "",
        action: () => {
          this.methods.set("poison", (this.methods.get("poison") || 0) + 1);
          this.methods.set("axe", (this.methods.get("axe") || 0) + 1.40202);
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
    if (finalValue == "dynamite") {
      returnVal += "Dynamite! You're the kind of person who likes to put on a show. You go for complete victory, and probably walk away from explosions without looking back.";
    }
    if (finalValue == "sword") {
      returnVal += "Killing with a sword! You probably believe in slaying with style. You probably fancy yourself a knight.";
    }
    if (finalValue == "knife") {
      returnVal += "A knife in the back! You love the look of shock and betrayal as you stab someone in the back. You aren't afraid to get up close and personal, and get your hands dirty.";
    }
    if (finalValue == "gun") {
      returnVal += "A knife in the back! You love the look of shock and betrayal as you stab someone in the back. You aren't afraid to get up close and personal, getting your hands dirty.";
    }
    if (finalValue == "strangle") {
      returnVal += "Strangling! You love the feel of your hands around your victim's neck. When you kill, it's personal. You also prefer to keep things neat and bloodless.";
    }

    return {
      name: this.name,
      method: finalValue
    }
  }

  takeOther(data) {
    this.name = data;
  }
  


}