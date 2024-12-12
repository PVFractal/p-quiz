import MurderQuiz from "./murderquiz.js";
import QuestionType from "./questiontype.js";

// References
let choiceField = document.getElementById("choice-set");
let title = document.getElementById("title");
// let textField = document.getElementById("text-area");
// let elseBox = document.getElementById("else-box");
let enterButton = document.getElementById("enter-button")


let newQuiz = new MurderQuiz();

function loadQuestions() {
  

  // Deleting the previous questions
  let originalLength = choiceField.children.length;

  for (var i = 0; i < originalLength - 1; i++) {
    choiceField.removeChild(choiceField.firstElementChild);
  }

  enterButton.style.visibility = "hidden";


  let page = newQuiz.nextQuestion();

  // checking to see if we are at the end
  if (page == undefined) {
    let data = newQuiz.getData();
    title = "Congratulations!"

    let newText = document.createElement("p");
    newText.textContent = "Your murder method is: " + data.method;
    choiceField.insertBefore(newText, enterButton);

    enterData(data)
    return;
  }


  // loading the title and questions
  title.textContent = page.title;

  page.questions.forEach(choice => {

    if (choice.type == QuestionType.REGULAR) {
      let newButton = document.createElement("button");
      newButton.textContent = choice.text;
      newButton.className = "choice";
      newButton.addEventListener("click", function() {
        choice.action();
        loadQuestions();
      });
      choiceField.insertBefore(newButton, enterButton);
    } else if (choice.type == QuestionType.OTHER) {
      let newDiv = document.createElement("div");
      newDiv.className = "choice";

      let newLabel = document.createElement("label");
      newLabel.htmlFor = "else-box";
      newLabel.textContent = choice.text;

      let newArea = document.createElement("textarea");
      newArea.id = "else-box";

      newArea.addEventListener("change", function() {
        if (newArea.value.length > 0) {
          enterButton.style.visibility = "";
        } else {
          enterButton.style.visibility = "hidden";
        }
      });

      newDiv.appendChild(newLabel);
      newDiv.appendChild(newArea);

      choiceField.insertBefore(newDiv, enterButton);
    }
  });

}

loadQuestions();


enterButton.addEventListener("click", function() {
  let val = document.getElementById("else-box").value;
  console.log(val);
  loadQuestions();
});


function enterData(data) {
  
  fetch('https://fabform.io/f/WgtpQaL', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
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