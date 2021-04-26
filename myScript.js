const animal = document.getElementById("animal");
const animalName = document.getElementById("animal-selected-name");
const healthPoints = document.getElementById("health-points");
const food = document.getElementById("food");
const foodLimit = document.getElementById("food-limit");
const water = document.getElementById("water");
const waterLimit = document.getElementById("water-limit");
const fun = document.getElementById("fun");
const funLimit = document.getElementById("fun-limit");
const sound = document.getElementById("sound");

function canary() {
  animal.src = animals[0].src;
  animalName.innerHTML = animals[0].species;
  healthPoints.style.width = animals[0].health_points + "px";
  healthPoints.innerHTML = "health: " + animals[0].health_points;
  food.style.width = animals[0].food + "px";
  food.innerHTML = "food: " + animals[0].food;
  foodLimit.innerHTML = animals[0].food_limit;
  water.style.width = animals[0].water + "px";
  water.innerHTML = "water: " + animals[0].water;
  waterLimit.innerHTML = animals[0].water_limit;
  fun.style.width = animals[0].fun + "px";
  fun.innerHTML = "fun: " + animals[0].fun;
  funLimit.innerHTML = animals[0].fun_limit;
  sound.innerHTML = animals[0].sound;
  var audio = new Audio(sound.innerHTML);
  audio.play();
}

function cow() {
  animal.src = animals[1].src;
  animalName.innerHTML = animals[1].species;
  healthPoints.style.width = animals[1].health_points + "px";
  healthPoints.innerHTML = "health: " + animals[1].health_points;
  food.style.width = animals[1].food + "px";
  food.innerHTML = "food: " + animals[1].food;
  document.getElementById("food-limit").innerHTML = animals[1].food_limit;
  document.getElementById("water").style.width = animals[1].water + "px";
  document.getElementById("water").innerHTML = "water: " + animals[1].water;
  document.getElementById("water-limit").innerHTML = animals[1].water_limit;
  document.getElementById("fun").style.width = animals[1].fun + "px";
  document.getElementById("fun").innerHTML = "fun: " + animals[1].fun;
  document.getElementById("fun-limit").innerHTML = animals[1].fun_limit;
  document.getElementById("sound").innerHTML = animals[1].sound;
  document.getElementById("sound1").innerHTML = animals[1].sound1;
  document.getElementById("sound2").innerHTML = animals[1].sound2;
  var random = Math.floor(Math.random() * 10);
  var sound;
  if (random < 3) {
    sound = document.getElementById("sound").innerHTML;
  } else if (random >= 3 && random <= 6) {
    sound = document.getElementById("sound1").innerHTML;
  } else if (random > 6) {
    sound = document.getElementById("sound2").innerHTML;
  }
  var audio = new Audio(sound);
  audio.play();
}

function elephant() {
  animal.src = animals[2].src;
  animalName.innerHTML = animals[2].species;
  healthPoints.style.width = animals[2].health_points + "px";
  healthPoints.innerHTML = "health: " + animals[2].health_points;
  food.style.width = animals[2].food + "px";
  food.innerHTML = "food: " + animals[2].food;
  document.getElementById("food-limit").innerHTML = animals[2].food_limit;
  document.getElementById("water").style.width = animals[2].water + "px";
  document.getElementById("water").innerHTML = "water: " + animals[2].water;
  document.getElementById("water-limit").innerHTML = animals[2].water_limit;
  document.getElementById("fun").style.width = animals[2].fun + "px";
  document.getElementById("fun").innerHTML = "fun: " + animals[2].fun;
  document.getElementById("fun-limit").innerHTML = animals[2].fun_limit;
  document.getElementById("sound").innerHTML = animals[2].sound;
  var sound = document.getElementById("sound").innerHTML;
  var audio = new Audio(sound);
  audio.play();
}

function monkey() {
  animal.src = animals[3].src;
  animalName.innerHTML = animals[3].species;
  healthPoints.style.width = animals[3].health_points + "px";
  healthPoints.innerHTML = "health: " + animals[3].health_points;
  food.style.width = animals[3].food + "px";
  food.innerHTML = "food: " + animals[3].food;
  document.getElementById("food-limit").innerHTML = animals[3].food_limit;
  document.getElementById("water").style.width = animals[3].water + "px";
  document.getElementById("water").innerHTML = "water: " + animals[3].water;
  document.getElementById("water-limit").innerHTML = animals[3].water_limit;
  document.getElementById("fun").style.width = animals[3].fun + "px";
  document.getElementById("fun").innerHTML = "fun: " + animals[3].fun;
  document.getElementById("fun-limit").innerHTML = animals[3].fun_limit;
  document.getElementById("sound").innerHTML = animals[3].sound;
  var sound = document.getElementById("sound").innerHTML;
  var audio = new Audio(sound);
  audio.play();
}

function mouse() {
  animal.src = animals[4].src;
  animalName.innerHTML = animals[4].species;
  healthPoints.style.width = animals[4].health_points + "px";
  healthPoints.innerHTML = "health: " + animals[4].health_points;
  food.style.width = animals[4].food + "px";
  food.innerHTML = "food: " + animals[4].food;
  document.getElementById("food-limit").innerHTML = animals[4].food_limit;
  document.getElementById("water").style.width = animals[4].water + "px";
  document.getElementById("water").innerHTML = "water: " + animals[4].water;
  document.getElementById("water-limit").innerHTML = animals[4].water_limit;
  document.getElementById("fun").style.width = animals[4].fun + "px";
  document.getElementById("fun").innerHTML = "fun: " + animals[4].fun;
  document.getElementById("fun-limit").innerHTML = animals[4].fun_limit;
  document.getElementById("sound").innerHTML = animals[4].sound;
  var sound = document.getElementById("sound").innerHTML;
  var audio = new Audio(sound);
  audio.play();
}

var animals = [
  {
    species: "canary",
    health_points: 190,
    food: 80,
    water: 100,
    fun: 200,
    health_points_: 190,
    food_limit: 80,
    water_limit: 100,
    fun_limit: 200,
    src: "canary.png",
    sound: "canary.wav",
  },
  {
    species: "cow",
    health_points: 225,
    food: 200,
    water: 150,
    fun: 100,
    food_limit: 200,
    water_limit: 150,
    fun_limit: 100,
    src: "cow.png",
    sound: "cow.mp3",
    sound1: "cow1.mp3",
    sound2: "cow2.mp3",
  },
  {
    species: "elephant",
    health_points: 325,
    food: 250,
    water: 250,
    fun: 150,
    food_limit: 250,
    water_limit: 250,
    fun_limit: 150,
    src: "elephant.png",
    sound: "elephant.flac",
  },
  {
    species: "monkey",
    health_points: 300,
    food: 150,
    water: 150,
    fun: 300,
    food_limit: 150,
    water_limit: 150,
    fun_limit: 300,
    src: "monkey.png",
    sound: "monkey.wav",
  },
  {
    species: "mouse",
    health_points: 182.5,
    food: 75,
    water: 90,
    fun: 200,
    food_limit: 75,
    water_limit: 90,
    fun_limit: 200,
    src: "mouse.png",
    sound: "mouse.wav",
  },
];

var hunger = null;
var thirst = null;
var boredom = null;
var vitality = null;

function confirmAnimal() {  
  if (animalName.innerHTML === "") {
    alert("choose your pet!");
  } else {
    document.getElementsByClassName("stats")[0].style.display = "inline-block";
    document.getElementsByClassName("items")[0].style.display = "inline-block";
    document.getElementsByClassName("back")[0].style.display = "block";
    document.getElementById("food-supply").style.display = "inline-block";
    document.getElementById("water-supply").style.display = "inline-block";
    document.getElementById("play-supply").style.display = "inline-block";
    document.getElementById("animal-list").style.display = "none";
    document.getElementById("okay-button").style.display = "none";
    animal.style.backgroundImage =
      "radial-gradient(rgb(235, 231, 88, 0), rgb(255, 147, 0, 0))";
    animalName.innerHTML;
    document.getElementById("animal-container").style.marginTop="20vmin";
    document.getElementById("animal-container").style.backgroundImage =
      "linear-gradient( rgb(0, 82, 191), rgb(135,206,250) 35%, rgb(255, 255, 255) 59%, rgb(50, 205, 50) 60%, rgb(0, 165, 0))";

    var food = parseInt(document.getElementById("food").style.width, 10);
    hunger = setInterval(function () {
      food--;
      document.getElementById("food").style.width = food + "px";
      document.getElementById("food").innerHTML = "food: " + food;
      if (food <= 0) {
        clearInterval(hunger);
      }
    }, 10000);

    var water = parseInt(document.getElementById("water").style.width, 10);
    thirst = setInterval(function () {
      water--;
      document.getElementById("water").style.width = water + "px";
      document.getElementById("water").innerHTML = "water: " + water;
      if (water <= 0) {
        clearInterval(thirst);
      }
    }, 9000);

    var fun = parseInt(document.getElementById("fun").style.width, 10);
    boredom = setInterval(function () {
      fun--;
      document.getElementById("fun").style.width = fun + "px";
      document.getElementById("fun").innerHTML = "fun: " + fun;
      if (fun <= 0) {
        clearInterval(boredom);
      }
    }, 12000);

    vitality = setInterval(function () {
      healthPoints.style.width = (food + water + fun) / 2 + "px";
      healthPoints.innerHTML = "health: " + (food + water + fun) / 2;
    }, 200);

    movement = setInterval(function () {
      var randomX = Math.floor(Math.random() * 801) - 400;
      var randomY = Math.floor(Math.random() * 301) - 50;
      var randomZ = Math.floor(Math.random() * 2 + 1) * 180;
      var randomQ = Math.floor(Math.random() * 30) - 15;
      animal.style.transform = "rotateY(" + randomZ + "deg" + ")";
      animal.style.transform += "rotate(" + randomQ + "deg" + ")";
      document.getElementById("heart-animation").style.visibility = "visible";
    }, 1800);
  }
}

document.getElementById("food-supply").addEventListener("click", foodSupply);

function foodSupply() {
  var audio = new Audio("food.wav");
  audio.play();
  var food = parseInt(document.getElementById("food").style.width, 10);
  var food_limit = document.getElementById("food-limit").innerHTML;
  clearInterval(hunger);
  clearInterval(vitality);
  if (food <= food_limit - 5) {
    foodSupplyInterval = setInterval(function () {
      food++;
      document.getElementById("food-supply").removeEventListener("click", foodSupply);
      document.getElementById("food").style.width = food + "px";
      document.getElementById("food").innerHTML = "food: " + food;
      if (food >= food_limit) {
        clearInterval(foodSupplyInterval);
        document.getElementById("food-supply").addEventListener("click", foodSupply);
      }
    }, 50);
  }

  hunger = setInterval(function () {
    food--;
    document.getElementById("food").style.width = food + "px";
    document.getElementById("food").innerHTML = "food: " + food;
    if (food <= 0) {
      clearInterval(hunger);
    }
  }, 10000);

  vitality = setInterval(function () {
    var water = parseInt(document.getElementById("water").style.width, 10);
    var fun = parseInt(document.getElementById("fun").style.width, 10);
    healthPoints.style.width = (food + water + fun) / 2 + "px";
    healthPoints.innerHTML = "health: " + (food + water + fun) / 2;
  }, 200);
}

document.getElementById("water-supply").addEventListener("click", waterSupply);

function waterSupply() {
  var audio = new Audio("water.wav");
  audio.play();
  var water = parseInt(document.getElementById("water").style.width, 10);
  var water_limit = document.getElementById("water-limit").innerHTML;
  clearInterval(thirst);
  clearInterval(vitality);
  if (water <= water_limit - 5) {
    thirstInterval = setInterval(function () {
      water++;
      document.getElementById("water-supply").removeEventListener("click", foodSupply);
      document.getElementById("water").style.width = water + "px";
      document.getElementById("water").innerHTML = "water: " + water;
      if (water >= water_limit) {
        clearInterval(thirstInterval);
        document.getElementById("water-supply").addEventListener("click", foodSupply);
      }
    }, 50);
  }

  thirst = setInterval(function () {
    water--;
    document.getElementById("water").style.width = water + "px";
    document.getElementById("water").innerHTML = "water: " + water;
    if (water <= 0) {
      clearInterval(thirst);
    }
  }, 10000);

  vitality = setInterval(function () {
    var food = parseInt(document.getElementById("food").style.width, 10);
    var fun = parseInt(document.getElementById("fun").style.width, 10);
    healthPoints.style.width = (food + water + fun) / 2 + "px";
    healthPoints.innerHTML = "health: " + (food + water + fun) / 2;
  }, 200);

}

document.getElementById("play-supply").addEventListener("click", playSupply);

function playSupply() {
  var audio = new Audio("play.wav");
  audio.play();
  document.getElementById("play-supply").style.transform =
    "rotate(" + Math.floor(Math.random() * 1800) + "deg";
  var fun = parseInt(document.getElementById("fun").style.width, 10);
  var fun_limit = document.getElementById("fun-limit").innerHTML;
  if (fun <= fun_limit - 5) {
    fun += Math.floor(Math.random() * 5);
  }
  document.getElementById("fun").style.width = fun + "px";
  document.getElementById("fun").innerHTML = "fun: " + fun;

  clearInterval(boredom);
  clearInterval(vitality);

  boredom = setInterval(function () {
    fun--;
    document.getElementById("fun").style.width = fun + "px";
    document.getElementById("fun").innerHTML = "fun: " + fun;
    if (fun <= 0) {
      clearInterval(boredom);
    }
  }, 12000);

  vitality = setInterval(function () {
    var food = parseInt(document.getElementById("food").style.width, 10);
    var water = parseInt(document.getElementById("water").style.width, 10);
    healthPoints.style.width = (food + water + fun) / 2 + "px";
    healthPoints.innerHTML = "health: " + (food + water + fun) / 2;
  }, 200);
}

lowValue = setInterval(function () {
  var food = parseInt(document.getElementById("food").style.width, 10);
  var food_limit = document.getElementById("food-limit").innerHTML;
  var water = parseInt(document.getElementById("water").style.width, 10);
  var water_limit = document.getElementById("water-limit").innerHTML;
  var fun = parseInt(document.getElementById("fun").style.width, 10);
  var fun_limit = document.getElementById("fun-limit").innerHTML;
  if (food < food_limit / 2 || water < water_limit / 2 || fun < fun_limit / 2) {
    var sound = document.getElementById("sound").innerHTML;
    var audio = new Audio(sound);
    audio.play();
  }
}, 10000);

death = setInterval(function () {
  var health = parseInt(healthPoints.style.width, 10);
  if (health < 5) {
    var audio = new Audio("death.wav");
    audio.play();
    clearInterval(hunger);
    clearInterval(thirst);
    clearInterval(boredom);
    clearInterval(vitality);
    clearInterval(lowValue);
    animal.src = animals[0].src = "grave.png";
    healthPoints.innerHTML = "";
    healthPoints.style.width = "0px";
    document.getElementById("food").innerHTML = "";
    document.getElementById("food").style.width = "0px";
    document.getElementById("water").innerHTML = "";
    document.getElementById("water").style.width = "0px";
    document.getElementById("fun").innerHTML = "";
    document.getElementById("fun").style.width = "0px";
    document.getElementById("food-supply").style.display = "none";
    document.getElementById("water-supply").style.display = "none";
    document.getElementById("play-supply").style.display = "none";
    document.getElementById("heart-animation").style.display = "none";
    clearInterval(death);
  }
}, 1000);

happiness = setInterval(function () {
  var food = parseInt(document.getElementById("food").style.width, 10);
  var food_limit = document.getElementById("food-limit").innerHTML;
  var water = parseInt(document.getElementById("water").style.width, 10);
  var water_limit = document.getElementById("water-limit").innerHTML;
  var fun = parseInt(document.getElementById("fun").style.width, 10);
  var fun_limit = document.getElementById("fun-limit").innerHTML;

  if (
    food > food_limit * 0.9 &&
    water > water_limit * 0.9 &&
    fun > fun_limit * 0.9
  ) {
    document.getElementById("heart-animation").style.display = "block";
    document.getElementById("heart-animation").src = "heart.png";
    animal.style.filter = "saturate(1) brightness(1)";
  } else if (
    (food > food_limit * 0.75 ||
      water > water_limit * 0.75 ||
      fun > fun_limit * 0.75) &&
    (food < food_limit * 0.9 ||
      water < water_limit * 0.9 ||
      fun < fun_limit * 0.9)
  ) {
    document.getElementById("heart-animation").style.display = "none";
    animal.style.filter = "saturate(0.75) brightness(0.95)";
  } else if (
    food < food_limit * 0.65 ||
    water < water_limit * 0.65 ||
    fun < fun_limit * 0.65
  ) {
    document.getElementById("heart-animation").style.display = "block";
    document.getElementById("heart-animation").src = "sad.png";
    animal.style.filter = "saturate(0.5) brightness(0.85)";
  }
}, 1000);
