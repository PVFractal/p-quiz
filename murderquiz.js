import QuestionType from "./questiontype.js";

export default class MurderQuiz {
  constructor() {
    this.questionIndex = 0;
    this.name = "";



    this.methods = new Map();

    this.methods["poison"] = 0;
    this.methods["axe"] = 0;
    this.methods["dynamite"] = 0;
    this.methods["sword"] = 0;
    this.methods["knife"] = 0;
    this.methods["gun"] = 0;
    this.methods["strangle"] = 0;
    
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
          this.methods["poison"] += 1;
          this.methods["strangle"] += 1;
        }
      },
      {
        type: QuestionType.REGULAR,
        text: "Quickly",
        img: "",
        action: () => {
          this.methods["axe"] += 1;
          this.methods["dynamite"] += 1;
          this.methods["sword"] += 1;
          this.methods["knife"] += 1;
          this.methods["gun"] += 1;
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
          this.poison += 1;
        }
      },
      {
        type: QuestionType.IMG,
        text: "By email",
        img: "",
        action: () => {
          this.hammer += 1;
        }
      }
    ]
  }
  ]


  nextQuestion() {
    return this.quiz[this.questionIndex++];
  }

  getData() {
    let ourMethod = "ME";

    return {
      method: ourMethod
    }
  }

  takeOther(data) {
    this.name = data;
  }
  


}