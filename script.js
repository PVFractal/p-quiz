import MurderQuiz from "./murderquiz.js";

console.log("Loaded");

let newQuiz = new MurderQuiz();

// References
let choiceField = document.getElementById("choice-set");
let title = document.getElementById("title");
let textField = document.getElementById("text-area");
let elseBox = document.getElementById("else-box");
let enterButton = document.getElementById("enter-button")

enterButton.style.visibility = "hidden";

// Choices
let choiceList = ["Money", "True Love", "Power"]
choiceList.forEach(choice => {
  let newButton = document.createElement("button");
  newButton.textContent = choice;
  newButton.className = "choice";
  newButton.addEventListener("click", function() {
    enterData(choice);
  });
  choiceField.insertBefore(newButton, textField);
  console.log(choice);
});


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
  



