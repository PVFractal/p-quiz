import MurderQuiz from './murderquiz.mjs';


let indexRecord = [];

// Filling indexRecord with zeros
let tempQuiz = new MurderQuiz();
while(true) {
  let q = tempQuiz.nextQuestion();
  if (q) {
    indexRecord.push(0);
  } else {
    break;
  }
}


let iterations = 0;
while(true) {

  let breakout = false;

  let i = 0;
  let quiz = new MurderQuiz();
  let record = [];
  while(true) {
    let nextQuestion = quiz.nextQuestion();
    if (nextQuestion) {

      let chosenChoice = nextQuestion.questions[indexRecord[i]];
      if (chosenChoice == undefined || !chosenChoice) {

        let nextChoice = indexRecord[i + 1];
        if (nextChoice !== undefined) {
          indexRecord[i + 1] += 1;
        } else {
          console.log("All possiblities reached");
          breakout = true;
          break;
        }

        indexRecord[i] = 0;
        chosenChoice = nextQuestion.questions[indexRecord[i]];
      }

      let recordString = nextQuestion.title + " | " + chosenChoice.text;

      record.push(recordString);
      
      chosenChoice.action();

      i++;
    } else {
      break;
    }
  }

  iterations++;

  let data = quiz.getData();
  if (data[0][1] == data[1][1]) {
    console.log("Iterations: " + iterations);
    console.log(data);
    console.log(record);
    break;
  }
  
  indexRecord[0] += 1;

  if (breakout) {
    console.log("Iterations: " + iterations);
    break;
  }
}

