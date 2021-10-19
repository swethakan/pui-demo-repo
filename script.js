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
},
{
  "question": "What are slips?",
  "answer": "Mistakes with the right goal, Wrong action. very common. Typos and automatic behaviours."
},
{
  "question": "Mode error is a type of _______ error.",
  "answer": "Slip."
},
{
  "question": "What is a Quasimode error?",
  "answer": "Active application as long as the user is performing a conscious action, e.g., keeping a key pressed."
},
{
  "question": "Name two types of slip errors",
  "answer":"Capture errors: Frequently done activity takes over. Description/Similarity Slip: Ex. Flipping wrong switch. Data-driven errors: Ex. Call a secretary to reserve a room, dial room number. Associative activation: Ex. Office phone rings, but say “come in”. Loss of activation:"
},
{
  "question": "What is a capture error?",
  "answer":"A type of slip error where a frequently done action takes over."
},
{
  "question": "Name two types of data collection methods for diary studies and experience sampling.",
  "answer":"interval-based: record data at a particular time each day, signal-based: record when told to. Event-based: record after a specified event."
},
{
  "question": "What is triangulation?",
  "answer":"The use of multiple approaches to converge and confirm emerging findings. Methods: Multiple-sources, multiple-methods, multiple-investigators, multiple theories."
},
{
  "question": "What is a design pattern?",
  "answer":"Proven designs that can be reused to satisfy design problems with good solutions."
},
{
  "question": "What are some differences between pattern and guidelines?",
  "answer":"Patterns tend to be more specific. Guidlines offer higher-level information. Patterns tend to be nouns/tangible things (ex. Nav bar)."
},
{
  "question": "The DOM is Static. True or False?",
  "answer":"False."
},
{
  "question": "How are GUIs roughly organized?",
  "answer":"WIMP: Windows, Icons, Menus, Pointers"
},
{
  "question": "Name 2 terms for highly reusable interactive components.",
  "answer":"Widgets, controls, components, interactors."
},
{
  "question": "What is event-driven programming?",
  "answer":"Input from user is handled as events."
},
{
  "question": "What are the advantages of the MVC model?",
  "answer":"Loose coupling, separation of concerns, reusable. Useful for organizing at a small scale (widgets) and large scale. many frameworks also follow these guidelines."
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
    document.getElementById("answer").style.color = "white";
    document.getElementById("answer").innerText = QandA.answer;
  }
  function showAnswer() {
    document.getElementById("answer").style.color = "black";
  }