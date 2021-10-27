var animal;
function tiger(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "An icon of a tiger, large cat of India";
    this.image = "assets/tiger.svg";
  }
function octopus(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "An icon of an octopus, marine animal with 8 legs";
    this.image = "assets/octopus.svg";
  }
function penguin(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "An icon of a penguin, bird of the arctic";
    this.image = "assets/penguin.svg";
  }

function generateRandomIndex(maxIndex){
      return Math.floor(Math.random() * maxIndex);
  }
function generateRandomName(){
    let index = generateRandomIndex(3);
    var animalNames = ["Khan", "Pebbles", "Legs"];
    return animalNames[index];
}

function generateRandomAge(){
    return generateRandomIndex(15);
}
function generateRandomAnimal(){
    let index = generateRandomIndex(3);

    let tiger1 = new tiger(generateRandomName(), generateRandomAge());
    let penguin1 = new penguin(generateRandomName(), generateRandomAge());
    let octopus1 = new octopus(generateRandomName(), generateRandomAge());
    let animal = [tiger1, penguin1, octopus1];

    return animal[index];

}

function saveAnimal(){
  var AllMyAnimals = JSON.parse(localStorage.getItem('myAnimals'));
  if( AllMyAnimals != null){
    if(AllMyAnimals.length == undefined)
      AllMyAnimals = [AllMyAnimals];
    AllMyAnimals.push(animal);
  }
  else{
    localStorage.setItem('myAnimals', JSON.stringify(animal));
    AllMyAnimals = animal;
  }
  localStorage.setItem('myAnimals', JSON.stringify(AllMyAnimals));
  AllMyAnimals = JSON.parse(localStorage.getItem('myAnimals'));
  console.log(AllMyAnimals);
}


function reset(){
  localStorage.setItem('myAnimals', null);
}

function onLoad() {
    animal = generateRandomAnimal();
    animal2 = generateRandomAnimal();
    animal3 = generateRandomAnimal();

    var array = [animal,animal2,animal3];

    // var arrayString = JSON.stringify(array);
    // array = JSON.parse(arrayString);

    // fill in code
    document.getElementById("animalName").innerText = animal.name;
    document.getElementById("animalImage").src = animal.image;
    document.getElementById("animalImage").alt = animal.image_alt;
    document.getElementById("animalAge").innerText = "Age = "+animal.age;
  }
