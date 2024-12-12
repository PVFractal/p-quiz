import QuestionType from "./questiontype.js";

export default class MurderQuiz {
  constructor() {
    this.questionIndex = 0;
    this.poison = 0;
    this.hammer = 0;
  }


  quiz = [
  {
    title: "How do you generally prefer to enjoy things?",
    questions: [
      {
        type: QuestionType.REGULAR,
        text: "Slowly",
        img: "",
        action: () => {
          this.poison += 1;
        }
      },
      {
        type: QuestionType.REGULAR,
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
        type: QuestionType.REGULAR,
        text: "One",
        img: "",
        action: () => {
          this.poison += 1;
        }
      },
      {
        type: QuestionType.OTHER,
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