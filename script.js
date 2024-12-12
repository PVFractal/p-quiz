import MurderQuiz from "./murderquiz.js";
import QuestionType from "./questiontype.js";

// References
let choiceField = document.getElementById("choice-set");
let title = document.getElementById("title");
// let textField = document.getElementById("text-area");
// let elseBox = document.getElementById("else-box");
let enterButton = document.getElementById("enter-button")
enterButton.style.visibility = "hidden";



let newQuiz = new MurderQuiz();

function loadQuestions() {
  let page = newQuiz.nextQuestion();

  title = page.title;

  page.questions.forEach(choice => {

    if (choice.type == QuestionType.REGULAR) {
      let newButton = document.createElement("button");
      newButton.textContent = choice.text;
      newButton.className = "choice";
      newButton.addEventListener("click", function() {
        choice.action();
      });
      choiceField.insertBefore(enterButton, newButton);
    } else if (choice.type == QuestionType.OTHER) {
      let newDiv = document.createElement("div");
      newDiv.className = "choice";

      let newLabel = document.createElement("label");
      newLabel.htmlFor = "else-box";

      let newArea = document.createElement("textarea");
      newArea.id = "else-box";


      newArea.addEventListener("change", function() {
        console.log(newArea.value);
        if (newArea.value.length > 1) {
          enterButton.style.visibility = "";
        } else {
          enterButton.style.visibility = "hidden";
        }
      });

      newDiv.appendChild(newLabel);
      newDiv.appendChild(newArea);

      choiceField.insertBefore(enterButton, newDiv);
    }

    elseId += 1;
  });

}

loadQuestions();


enterButton.addEventListener("click", function() {
  val = document.getElementById("else-box").value;
  console.log(val);
  loadQuestions();
});


function enterData(data) {
  const formData = {
    answer: data
  };
  
  fetch('https://fabform.io/f/WgtpQaL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success === "true") {
      console.log("Success!");
    } else {
      throw new Error('Server response indicates failure');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  document.getElementById("mainBody").removeChild(choiceField);
  title.textContent = "Thanks for your answer!";
}