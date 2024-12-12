import MurderQuiz from "./murderquiz.js";

// References
let choiceField = document.getElementById("choice-set");
let title = document.getElementById("title");
let textField = document.getElementById("text-area");
let elseBox = document.getElementById("else-box");
let enterButton = document.getElementById("enter-button")

enterButton.style.visibility = "hidden";



let newQuiz = new MurderQuiz();

function loadQuestions() {
  let page = newQuiz.nextQuestion();

  title = page.title;


  page.questions.forEach(choice => {
    let newButton = document.createElement("button");
    newButton.textContent = choice.text;
    newButton.className = "choice";
    newButton.addEventListener("click", function() {
      choice.action();
    });
    choiceField.insertBefore(newButton, textField);
    console.log(choice.text);
  });

}


loadQuestions();



elseBox.addEventListener("change", function() {
  console.log(elseBox.value);
  if (elseBox.value.length > 1) {
    enterButton.style.visibility = "";
  } else {
    enterButton.style.visibility = "hidden";
  }
});

enterButton.addEventListener("click", function() {
  val = elseBox.value;
  enterData(val);
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