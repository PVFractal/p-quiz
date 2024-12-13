import MurderQuiz from "./murderquiz.mjs";
import QuestionType from "./questiontype.mjs";

// References
let choiceField = document.getElementById("choice-set");
let title = document.getElementById("title");
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
    title.textContent = "Congratulations!"

    let newText = document.createElement("p");
    newText.textContent = data.method;
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
    } else if (choice.type == QuestionType.IMG) {
      let newButton = document.createElement("div");
      newButton.className = "choice";
      newButton.addEventListener("click", function() {
        choice.action();
        loadQuestions();
      });

      let newImg = document.createElement("img");
      newImg.src = choice.img;
      newImg.alt = choice.img;

      let newTxt = document.createElement("p");
      newTxt.textContent = choice.text;
      newTxt.className = "imgTxt";

      newButton.appendChild(newImg);
      newButton.appendChild(newTxt);


      choiceField.insertBefore(newButton, enterButton);
    }
  });

}

loadQuestions();


enterButton.addEventListener("click", function() {
  let val = document.getElementById("else-box").value;
  newQuiz.takeOther(val);
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
}