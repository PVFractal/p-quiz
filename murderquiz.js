

export default class MurderQuiz {
  constructor() {
    console.log("Initiated here");

    this.questionIndex = 0;

    this.poison = 0;
    this.hammer = 0;
  }


  quiz = [
  {
    title: "How do you generally prefer to enjoy things?",
    questions: [
      {
        text: "Slowly",
        img: "",
        action: () => {
          this.poison += 1;
        }
      },
      {
        text: "Quickly",
        img: "",
        action: () => {
          this.hammer += 1;
        }
      }
    ]
  },
  {
    title: "Second Question",
    questions: [
      {
        text: "One",
        img: "",
        action: () => {
          this.poison += 1;
        }
      },
      {
        text: "Two",
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
  


}