var QuestionsJson = [{
  "question": "What is the NetPromoter method?",
  "answer": "The ‘how likely are you to recommend this to a friend” method. Does not really help us as UX researchers."
},
{
  "question": "Name two possible Usability Goals",
  "answer": "Learnable, Memorable, Flexible: Multiple ways to accomplish tasks, Efficient: Perform tasks quickly, Pleasing: High subjective. Robust: Good feedback so user can recover, Out of box experience: First time to “oh that’s cool”, Fun, Enjoyable"
},
{
  "question": "What is the Iterative Design Method?",
  "answer": "Short cycles of design, prototype, evaluation"
}];

function generateRandomIndex(maxIndex){
      return Math.floor(Math.random() * maxIndex);
  }
function generateRandomQuestion(){
    let index = generateRandomIndex(QuestionsJson.length);
    return QuestionsJson[index];
}

function onLoad() {
    var QandA = generateRandomQuestion();
    // fill in code
    console.log(QandA.answer);
    document.getElementById("question").innerText = QandA.question;
    document.getElementById("answer").innerText = QandA.answer;
  }
  function showAnswer() {
    document.getElementById("answer").style.color = "black";
  }