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
},
{
  "question": "Describe the gulf of evaluation.",
  "answer":"It is the gap between the user's understanding of how the system works vs. how the system actually works."
},
{
  "question": "What is the Human Processor model?",
  "answer":"Sees the human as an information processor. Perceptual system, motor system, cognitive system."
},
{
  "question": "About what percent of males and females are color blind?",
  "answer":"about 8% of men and .05% of women."
},
{
  "question": "What are two types of memories (cognitive processors)?",
  "answer":"Short term memory + Long term memory"
},
{
  "question": "What are three ways to improve Fitts law",
  "answer":"Placing buttons on sides makes it infinite width and thus easier to hit. Larger labels are easier to hit. Spacing between icons make them easier to hit. Avoid pointing tasks altogether: Keyboard shortcuts, Mouse Wheel, Snapping"
},
{
  "question": "Every System has Three Different Mental Models. What are they?",
  "answer":"Design Model - How you, the designer, intend the system to work. System Image - Your Implementation. User Model - How users think the system works"
},
{
  "question": "What are affordances?",
  "answer":"Clues to their operation that are readily apparent. Often visual."
},
{
  "question": "Give an example of mapping controls.",
  "answer":"Ex: Stove top. How do we map the buttons to the stove? Maybe the stoves are not in a 2 by 2 grid. Instead the are in a single row. Buttons are directly below. The mapping is clear: users clearly know which buttons control what stovetop."
},
{
  "question": "Why are metaphors sometimes not the best visualization technique",
  "answer":"Metaphor may be depreciated(ex. floppy disk) or too literal (ex. I-books previous UI)."
},
{
  "question": "What is a Skeuomorphic Interface?",
  "answer":"graphical user interface designed to describe interface objects that mimic their real-world counterparts(metaphors)."
},
{
  "question": "Name 3 interaction techniques.",
  "answer": "Pointing tasks, Text input, Voice input, touch, tilting."
},
{
  "question": "Name 2 output techniques.",
  "answer": "Zooming. Overlays. Detail inspection."
},
{
  "question": "How quick does something need to be to feel like 'instant response'?",
  "answer": "100ms."
},
{
  "question": "What is a good and bad response time?",
  "answer": "2 seconds = good. 10-15 = bad."
},
{
  "question": "How much faster does your site need to be to have an advantage over competiters?",
  "answer": "250 ms."
},
{
  "question": "What is REST?",
  "answer": "REpresentational State Transfer (REST). Describes architectural style of the web, i.e., describes the systems on a high-level."
},
{
  "question": "Name the steps to a user study with regards to ethical concerns.",
  "answer": "You must alleviate stress. Avoid pressuring the participant. Let them know they can quit. Anonymize data."
},
{
  "question": "Name the steps to a user study.",
  "answer": "Describe the purpose. Tell them you are testing the product, not them. Tell them they can quit anytime. Demonstrate how to use equipment. Explain how to do a think aloud. Explain you will not provide help. Explain basic concept of UI. Describe the task."
},
{
  "question": "What does light travel through in the human eye?",
  "answer": "cornea →crystalline lens →retina"
},
{
  "question": "What does the iris do in the human eye?",
  "answer": "It controls the amount of light that passes through"
},
{
  "question": "What does the optic nerve do?",
  "answer": "Transfers processed light to the visual cortex"
},
{
  "question": "What is the Fovea?",
  "answer": "Center of the retina. Has the most cones"
},
{
  "question": "What is the Value of the a color?",
  "answer": "describes overall intensity to how light or dark a color is.It is the only dimension of color that may exist by itself."
},
{
  "question": "What does Don Norman say, in the first chapter of his book, are the most important characteristics of good design?",
  "answer": "Discoverability and understandability."
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